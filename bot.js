const TelegramBot = require('node-telegram-bot-api');

// توکن ربات خود را اینجا قرار دهید
const token = '6212882062:AAHJacIwImY21xCfJQF4Bh6CUoC-6AAQHMY';

// ایجاد یک ربات جدید با استفاده از توکن
const bot = new TelegramBot(token, {polling: true});

// بررسی دریافت پیام جدید
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // ارسال یک پیام به کاربر
  bot.sendMessage(chatId, 'سلام! به ربات تلگرام خود خوش آمدید.');
});
