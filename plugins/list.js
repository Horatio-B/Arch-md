const run  = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
const fontx = (text, style = 1) => {
    var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var ehz = {
        1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    };
    var replacer = [];
    abc.map((v, i) =>
        replacer.push({
            original: v,
            convert: ehz[style].split('')[i]
        })
    );
    var str = text.toLowerCase().split('');
    var output = [];
    str.map((v) => {
        const find = replacer.find((x) => x.original == v);
        find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
};
let { getDevice } = require('baileys')
let fs = require("fs")
let os = require('os');
let speed = require('performance-now');
let moment = require('moment-timezone');
let nou = require("node-os-utils");
let { sizeFormatter } = require('human-readable');
const timestamp = speed()
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
const mark = "0@s.whatsapp.net"
var tot = nou.drive.info();
const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('en').format(format)
	} else {
		return moment.tz(`${global.timezone}`).locale('en').format(format)
	}
}
const formatp = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { ednut, ednutdev, reply4 }) => {
let timestampe = speed()
let latensi = speed() - timestampe
let me = m.sender
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)

let archmenu = `Hi  ${m.pushName} 👋 here's my menu list

...

• Autostatus
make the bot auto view your status

• Autotyping
the bot will change your presence to auto typing and it will show typing for other viewers

• Autorecording
the bot will change your presence to auto recording and it will show recording for other viewers

• Autoread
the bot will auto read all new messages received on it on

• Unavailable
the bot will show offline when you are offline leaving your current presence

...

© ᴀʀᴄʜ ᴍᴅ`

if (menutype === 'v1') {
  ednut.sendMessage(m.chat, {
    text: fontx(archmenu),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: botname,
        body: 'menu list',
        thumbnailUrl: `${global.thumb}`,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }), {
    quoted: m
  }
} else if (menutype === 'v2') {
  ednut.sendMessage(m.chat, { text: fontx(archmenu) }, {
    quoted: m
  })
} else if (menutype === 'v3') {
  reply4(fontx(archmenu))
}
}

handler.command = ["list","help"]

module.exports = handler
