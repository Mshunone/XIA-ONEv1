let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi 」
│ • https://i.pinimg.com/564x/57/5c/8c/575c8cf89faea4a22e2bb0eacc12ffcc.jpg
|> Tap Tap
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285641142178
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
