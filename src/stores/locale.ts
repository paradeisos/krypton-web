import { observable, action, computed } from "mobx"
import { addLocaleData } from "react-intl"

// 导入国际化数据
import enData from "react-intl/locale-data/en"
import enMessage from "src/assets/locales/en.json"
import zhData from "react-intl/locale-data/zh"
import zhMessage from "src/assets/locales/zh.json"
// 注册国际化基本数据
addLocaleData(enData)
addLocaleData(zhData)

class LocaleStore {

  @observable
  config: {
    messages: any,
    locale: string,
    data: any
  }

  @computed
  get messages() {
    return this.config.messages
  }

  constructor() {
    this.load()
  }

  load() {
    const stored = window.localStorage.getItem("locale")
    this.switch(stored)
  }

  /**
   * @description 切换显示语言
   * TODO: 懒加载数据
   *
   * @param {("en-US" | "zh-Hans-CN")} locale
   *
   * @memberOf LocaleStore
   */
  @action switch(locale: "en-US" | "zh-Hans-CN" | string) {
    if (locale) {
      window.localStorage.setItem("locale", locale)
    }
    if (locale === "en-US") {
      this.config = {
        messages: enMessage,
        locale: "en-US",
        data: enData
      }
    } else {
      this.config = {
        messages: zhMessage,
        locale: "zh-Hans-CN",
        data: zhData
      }
    }

  }

}

export const localeStore = new LocaleStore()
