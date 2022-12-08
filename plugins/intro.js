let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0۪۪[ Intro ]⸙‹•═════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪══⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪═══⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler
