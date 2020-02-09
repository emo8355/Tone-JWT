const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
require("dotenv").config();

const key = process.env.API_KEY;
const url = process.env.API_ADDERESS;

const toneAnalyzer = new ToneAnalyzerV3({
  authenticator: new IamAuthenticator({ apikey: key }),
  version: "2016-05-19",
  url: url
});

const get_tone = text => {
  return toneAnalyzer
    .tone({
      toneInput: text,
      contentType: "text/plain"
    })
    .then(response => {
      const list = response.result.document_tone.tone_categories[0].tones;
      let a = list.reduce((acc, cur) => (acc.score > cur.score ? acc : cur));
      return a;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = { get_tone };
