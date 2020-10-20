const axios = require('axios')
const cheerio = require('cheerio')
const download = require('download')

getWeb()

async function getWeb() {
  const res = await axios.get('https://www.xiniaogongkao.com/teacher')
  const $ = cheerio.load(res.data)
  $('.card .card-top img').each(async (index, el) => {
    await download($(el).attr('src'), 'img');
  })
}