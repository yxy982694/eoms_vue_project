import CryptoJS from 'crypto-js'
export default {
  encrypt: function(word) {
    let key = 'ihaierForTodoKey'
    //密钥偏移量 (需要前端和后端保持一致)十六位作为密钥偏移量
    let iv = "ihaierForTodo_Iv"
    let _word = CryptoJS.enc.Utf8.parse(word),
        _key = CryptoJS.enc.Utf8.parse(key),
        _iv = CryptoJS.enc.Utf8.parse(iv)
    let encrypted = CryptoJS.AES.encrypt(_word, _key, {
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString()
  }
}
