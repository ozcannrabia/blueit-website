import { createContext, useContext, useState, type ReactNode } from 'react'
import { t, type Lang, type TKey } from './translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  T: (key: TKey) => string
}

const Ctx = createContext<LangCtx>({
  lang: 'tr',
  setLang: () => {},
  T: (k) => t.tr[k],
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('tr')
  const T = (key: TKey): string => t[lang][key]
  return <Ctx.Provider value={{ lang, setLang, T }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
