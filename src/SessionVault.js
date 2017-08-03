export default class SessionVault {
  static getItem(key) {
    return sessionStorage.getItem(key)
  }

  static setItem(key, value) {
    sessionStorage.setItem(key, value)
  }

  static removeItem(key) {
    sessionStorage.removeItem(key)
  }

  static clearAll() {
    sessionStorage.clear()
  }
}