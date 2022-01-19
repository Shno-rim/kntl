const axios = require('axios')
const cheerio = require('cheerio')
const { fetchJson, fetchText } = require('./fetch')
const fetch = require('node-fetch')

const onGoing = async (p) => {
const res = await axios.get(`https://otakudesu.vip/ongoing-anime/`)
const $ = cheerio.load(res.data)
const result = []
$('.venz').find('li > div.detpost').each(function(c, d) {
const judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
const url = $(d).find('div.thumb > a > div.thumbz > url').attr('url')
const thumb = $(d).find('div.thumb > a > div.thumbz > img').attr('src')
const eps = $(d).find('div.epz').text()
const hri = $(d).find('div.epztipe').text()
const tgl = $(d).find('div.newnime').text()
result.push({ judul, thumb, eps, hri, tgl })
})
return result
}


exports.onGoing = onGoing