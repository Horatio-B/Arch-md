let handler = async function (m, { ednut, isOwner, command, isCmd, isCmd2, text, runtime, mime, sleep, speed, botNumber, pushname, example, isGroup, groupMetadata, isBotAdmins, isGroupAdmins, isAdmins, reply4 }) {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }

  if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)
  if (!isOwner) return m.reply(msg.owner)
  if (!text) return m.reply(example("on/off"))
  if (!/on|off/.test(text)) return m.reply(example("on/off"))

  let event
  let name
  let actions

  if (command == "autoread") {
    event = global.db.settings.autoread
    name = "Autoread"
    actions = async (kondisi) => {
      global.db.settings.autoread = kondisi
    }
  }

  if (command == "autorecording") {
    event = global.db.settings.autorecording
    name = "Autorecording"
    actions = async (kondisi) => {
      global.db.settings.autorecording = kondisi
    }
  }

  if (command == "autotyping") {
    event = global.db.settings.autotyping
    name = "Autotyping"
    actions = async (kondisi) => {
      global.db.settings.autotyping = kondisi
    }
  }

  if (command == "unavailable") {
    event = global.db.settings.unavailable
    name = "Unavailable"
    actions = async (kondisi) => {
      global.db.settings.unavailable = kondisi
    }
  }

  if (command == "autostatus") {
    event = global.db.settings.readsw
    name = "Autostatus"
    actions = async (kondisi) => {
      global.db.settings.readsw = kondisi
    }
  }

  if (command == "autostatuslike") {
    event = global.db.settings.readsw2
    name = "Autostatuslike"
    actions = async (kondisi) => {
      global.db.settings.readsw2 = kondisi
    }
  }

  if (text == "on") {
    if (event === true) return m.reply(`*${name} already on!*`)
    actions(true)
    return m.reply(`*successfully turned on ${name} ✅*`)
  }

  if (text == "off") {
    if (event === false) return m.reply(`*${name} already off!*`)
    actions(false)
    return m.reply(`*successfully turned off ${name} ✅*`)
  }
}

handler.command = [
  "autoread",
  "autorecording",
  "unavailable",
  "autotyping",
  "autostatus",
  "autostatuslike"
]

module.exports = handler
