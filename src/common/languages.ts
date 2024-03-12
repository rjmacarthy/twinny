// Derived with credit from https://github.com/ex3ndr/llama-coder/blob/main/src/prompts/processors/languages.ts
export type CodeLanguage =
  | 'bat'
  | 'c'
  | 'csharp'
  | 'cpp'
  | 'css'
  | 'go'
  | 'html'
  | 'java'
  | 'javascript'
  | 'javascriptreact'
  | 'json'
  | 'jsx'
  | 'kotlin'
  | 'objective-c'
  | 'php'
  | 'python'
  | 'rust'
  | 'sass'
  | 'scss'
  | 'shellscript'
  | 'swift'
  | 'typescript'
  | 'typescriptreact'
  | 'xml'
  | 'yaml'
  | 'lua'
  | 'perl'
  | 'r'
  | 'ruby'
  | 'scala'
  | 'sql'
  | 'typescriptreactnative'
  | 'xaml'

export type CodeLanguageDetails = {
  fileExtensions: string[]
  filenamePatterns?: string[]
  syntaxComments?: { start: string; end?: string; singleLine?: string }
  derivedFrom?: CodeLanguage
  langName?: string
}

export const supportedLanguages: {
  [key in CodeLanguage]: CodeLanguageDetails
} = {
  bat: {
    langName: 'BAT file',
    fileExtensions: ['.bat', '.cmd'],
    syntaxComments: { start: 'REM', singleLine: 'REM' }
  },
  c: {
    langName: 'C',
    fileExtensions: ['.c', '.h'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  csharp: {
    langName: 'C#',
    fileExtensions: ['.cs'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  cpp: {
    langName: 'C++',
    fileExtensions: ['.cpp', '.h'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  css: {
    langName: 'CSS',
    fileExtensions: ['.css'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  go: {
    langName: 'Go',
    fileExtensions: ['.go'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  html: {
    langName: 'HTML',
    fileExtensions: ['.htm', '.html'],
    syntaxComments: { start: '<!--', end: '-->', singleLine: '//' }
  },
  java: {
    langName: 'Java',
    fileExtensions: ['.java'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  javascript: {
    langName: 'Javascript',
    fileExtensions: ['.js', '.jsx', '.cjs'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  javascriptreact: {
    langName: 'Javascript JSX',
    fileExtensions: ['.jsx'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  json: {
    langName: 'JSON',
    fileExtensions: ['.json', '.jsonl', '.geojson']
  },
  jsx: {
    langName: 'JSX',
    fileExtensions: ['.jsx'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  kotlin: {
    langName: 'Kotlin',
    fileExtensions: ['.kt', '.ktm', '.kts'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  'objective-c': {
    langName: 'Objective C',
    fileExtensions: ['.h', '.m', '.mm'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  php: {
    langName: 'PHP',
    fileExtensions: [
      '.aw',
      '.ctp',
      '.fcgi',
      '.inc',
      '.php',
      '.php3',
      '.php4',
      '.php5',
      '.phps',
      '.phpt'
    ],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  python: {
    langName: 'Python',
    fileExtensions: ['.py'],
    syntaxComments: { start: '\'\'\'', end: '\'\'\'', singleLine: '#' }
  },
  rust: {
    langName: 'Rust',
    fileExtensions: ['.rs', '.rs.in'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  sass: {
    langName: 'SASS',
    fileExtensions: ['.sass'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  scss: {
    langName: 'SCSS',
    fileExtensions: ['.scss'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  shellscript: {
    langName: 'Shell',
    fileExtensions: ['.bash', '.sh'],
    syntaxComments: { start: '#', singleLine: '#' }
  },
  swift: {
    langName: 'Swift',
    fileExtensions: ['.swift'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  typescript: {
    langName: 'Typescript',
    fileExtensions: ['.ts', '.cts', '.mts'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  typescriptreact: {
    langName: 'Typescript React',
    fileExtensions: ['.tsx'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' },
    derivedFrom: 'typescript'
  },
  xml: {
    langName: 'XML',
    fileExtensions: ['.xml'],
    syntaxComments: { start: '<!--', end: '-->', singleLine: '//' }
  },
  yaml: {
    langName: 'YAML',
    fileExtensions: ['.yml', '.yaml'],
    syntaxComments: { start: '#', singleLine: '#' }
  },
  lua: {
    langName: 'Lua',
    fileExtensions: ['.lua'],
    syntaxComments: { start: '--', end: '--[[ ]]--', singleLine: '--' }
  },
  perl: {
    langName: 'Perl',
    fileExtensions: ['.pl', '.pm'],
    syntaxComments: { start: '#', singleLine: '#' }
  },
  r: {
    langName: 'R',
    fileExtensions: ['.r', '.R'],
    syntaxComments: { start: '#', singleLine: '#' }
  },
  ruby: {
    langName: 'Ruby',
    fileExtensions: ['.rb'],
    syntaxComments: { start: '=begin', end: '=end', singleLine: '#' }
  },
  scala: {
    langName: 'Scala',
    fileExtensions: ['.scala'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' }
  },
  sql: {
    langName: 'SQL',
    fileExtensions: ['.sql'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '--' }
  },
  typescriptreactnative: {
    langName: 'Typescript React Native',
    fileExtensions: ['.tsx'],
    syntaxComments: { start: '/*', end: '*/', singleLine: '//' },
    derivedFrom: 'typescript'
  },
  xaml: {
    langName: 'XAML',
    fileExtensions: ['.xaml'],
    syntaxComments: { start: '<!--', end: '-->', singleLine: '//' }
  }
}
