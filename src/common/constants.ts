import { defaultTemplates } from '../extension/templates'

export const EXTENSION_NAME = '@ext:rjmacarthy.twinny'
export const ASSISTANT = 'assistant'
export const USER = 'user'
export const TWINNY = '🤖 twinny'
export const SYSTEM = 'system'
export const YOU = '👤 You'
export const EMPTY_MESAGE = 'Sorry, I don’t understand. Please try again.'
export const MODEL_ERROR = 'Sorry, something went wrong...'
export const OPENING_BRACKETS = ['[', '{', '(']
export const CLOSING_BRACKETS = [']', '}', ')']
export const OPENING_TAGS = ['<']
export const CLOSING_TAGS = ['</']
export const QUOTES = ['"', '\'', '`']
export const ALL_BRACKETS = [...OPENING_BRACKETS, ...CLOSING_BRACKETS] as const
export const BRACKET_REGEX = /^[()[\]{}]+$/
export const NORMALIZE_REGEX = /\s*\r?\n|\r/g
export const LINE_BREAK_REGEX = /\r?\n|\r|\n/g
export const QUOTES_REGEX = /["'`]/g
export const MAX_CONTEXT_LINE_COUNT = 200
export const SKIP_DECLARATION_SYMBOLS = ['=']
export const IMPORT_SEPARATOR = [',', '{']
export const SKIP_IMPORT_KEYWORDS_AFTER = ['from', 'as', 'import']
export const MIN_COMPLETION_CHUNKS = 2
export const MAX_EMPTY_COMPLETION_CHARS = 250

export const EVENT_NAME = {
  twinngAddMessage: 'twinny-add-message',
  twinnyAcceptSolution: 'twinny-accept-solution',
  twinnyChat: 'twinny-chat',
  twinnyChatMessage: 'twinny-chat-message',
  twinnyClickSuggestion: 'twinny-click-suggestion',
  twinnyEnableModelDownload: 'twinny-enable-model-download',
  twinnyFetchOllamaModels: 'twinny-fetch-ollama-models',
  twinnyGetConfigValue: 'twinny-get-config-value',
  twinnyGetGitChanges: 'twinny-get-git-changes',
  twinnyGlobalContext: 'twinny-global-context',
  twinnyHideBackButton: 'twinny-hide-back-button',
  twinnyListTemplates: 'twinny-list-templates',
  twinnyManageTemplates: 'twinny-manage-templates',
  twinnyNewDocument: 'twinny-new-document',
  twinnyNotification: 'twinny-notification',
  twinnyOnCompletion: 'twinny-on-completion',
  twinnyOnEnd: 'twinny-on-end',
  twinnyOnLoading: 'twinny-on-loading',
  twinnyOpenDiff: 'twinny-open-diff',
  twinnyOpenSettings: 'twinny-open-settings',
  twinnySendLanguage: 'twinny-send-language',
  twinnySendSystemMessage: 'twinny-send-system-message',
  twinnySendTheme: 'twinny-send-theme',
  twinnySetConfigValue: 'twinny-set-config-value',
  twinnySetGlobalContext: 'twinny-set-global-context',
  twinnySetOllamaModel: 'twinny-set-ollama-model',
  twinnySetTab: 'twinny-set-tab',
  twinnySetWorkspaceContext: 'twinny-set-workspace-context',
  twinnyStopGeneration: 'twinny-stop-generation',
  twinnyTextSelection: 'twinny-text-selection',
  twinnyWorkspaceContext: 'twinny-workspace-context',
  twinnyEmbedDocuments: 'twinny-embed-documents',
}

export const TWINNY_COMMAND_NAME = {
  addTests: 'twinny.addTests',
  addTypes: 'twinny.addTypes',
  conversationHistory: 'twinny.conversationHistory',
  disable: 'twinny.disable',
  enable: 'twinny.enable',
  explain: 'twinny.explain',
  focusSidebar: 'twinny.sidebar.focus',
  generateDocs: 'twinny.generateDocs',
  getGitCommitMessage: 'twinny.getGitCommitMessage',
  hideBackButton: 'twinny.hideBackButton',
  manageProviders: 'twinny.manageProviders',
  manageTemplates: 'twinny.manageTemplates',
  newChat: 'twinny.newChat',
  openChat: 'twinny.openChat',
  refactor: 'twinny.refactor',
  sendTerminalText: 'twinny.sendTerminalText',
  settings: 'twinny.settings',
  stopGeneration: 'twinny.stopGeneration',
  templateCompletion: 'twinny.templateCompletion',
  templates: 'twinny.templates'
}

export const CONVERSATION_EVENT_NAME = {
  getActiveConversation: 'twinny.get-active-conversation',
  getConversations: 'twinny.get-conversations',
  removeConversation: 'twinny.remove-conversation',
  saveConversation: 'twinny.save-conversation',
  saveLastConversation: 'twinny.save-last-conversation',
  setActiveConversation: 'twinny.set-active-conversation',
  clearAllConversations: 'twinny.clear-all-conversations'
}

export const PROVIDER_EVENT_NAME = {
  addProvider: 'twinny.add-provider',
  copyProvider: 'twinny.copy-provider',
  focusProviderTab: 'twinny.focus-provider-tab',
  getActiveChatProvider: 'twinny.get-active-provider',
  getActiveFimProvider: 'twinny.get-active-fim-provider',
  getAllProviders: 'twinny.get-providers',
  removeProvider: 'twinny.remove-provider',
  resetProvidersToDefaults: 'twinny.reset-providers-to-defaults',
  setActiveChatProvider: 'twinny.set-active-chat-provider',
  setActiveFimProvider: 'twinny.set-active-fim-provider',
  updateProvider: 'twinny.update-provider'
}

export const ACTIVE_CHAT_PROVIDER_STORAGE_KEY = 'twinny.active-chat-provider'
export const ACTIVE_CONVERSATION_STORAGE_KEY = 'twinny.active-conversation'
export const ACTIVE_FIM_PROVIDER_STORAGE_KEY = 'twinny.active-fim-provider'
export const CONVERSATION_STORAGE_KEY = 'twinny.conversations'
export const INFERENCE_PROVIDERS_STORAGE_KEY = 'twinny.inference-providers'

export const WORKSPACE_STORAGE_KEY = {
  autoScroll: 'autoScroll',
  chatMessage: 'chatMessage',
  downloadCancelled: 'downloadCancelled',
  selectedTemplates: 'selectedTemplates',
  selection: 'selection',
  showProviders: 'showProviders'
}

export const EXTENSION_SETTING_KEY = {
  apiProvider: 'apiProvider',
  apiProviderFim: 'apiProviderFim',
  chatModelName: 'chatModelName',
  fimModelName: 'fimModelName'
}

export const EXTENSION_CONTEXT_NAME = {
  twinnyConversationHistory: 'twinnyConversationHistory',
  twinnyGeneratingText: 'twinnyGeneratingText',
  twinnyManageProviders: 'twinnyManageProviders',
  twinnyManageTemplates: 'twinnyManageTemplates'
}

export const WEBUI_TABS = {
  chat: 'chat',
  history: 'history',
  providers: 'providers',
  templates: 'templates'
}

export const FIM_TEMPLATE_FORMAT = {
  automatic: 'automatic',
  codegemma: 'codegemma',
  codellama: 'codellama',
  codeqwen: 'codeqwen',
  custom: 'custom-template',
  deepseek: 'deepseek',
  llama: 'llama',
  stableCode: 'stable-code',
  starcoder: 'starcoder',
}

export const STOP_LLAMA = ['<EOT>']

export const STOP_DEEPSEEK = [
  '<｜fim▁begin｜>',
  '<｜fim▁hole｜>',
  '<｜fim▁end｜>',
  '<END>',
  '<｜end▁of▁sentence｜>'
]

export const STOP_STARCODER = ['<|endoftext|>']

export const STOP_CODEGEMMA = ['<|file_separator|>', '<|end_of_turn|>', '<eos>']

export const DEFAULT_TEMPLATE_NAMES = defaultTemplates.map(({ name }) => name)

export const DEFAULT_ACTION_TEMPLATES = [
  'refactor',
  'add-tests',
  'add-types',
  'explain'
]

export const DEFAULT_PROVIDER_FORM_VALUES = {
  apiHostname: '0.0.0.0',
  apiKey: '',
  apiPath: '',
  apiPort: 11434,
  apiProtocol: 'http',
  id: '',
  label: '',
  modelName: '',
  name: '',
  provider: 'ollama',
  type: 'chat'
}

export const TITLE_GENERATION_PROMPT_MESAGE = `
  Generate a title for this conversation in under 10 words.
  It should not contain any special characters or quotes.
`

export const WASM_LANGAUAGES: { [key: string]: string } = {
  cpp: 'cpp',
  hpp: 'cpp',
  cc: 'cpp',
  cxx: 'cpp',
  hxx: 'cpp',
  cs: 'c_sharp',
  c: 'c',
  h: 'c',
  css: 'css',
  php: 'php',
  phtml: 'php',
  php3: 'php',
  php4: 'php',
  php5: 'php',
  php7: 'php',
  phps: 'php',
  'php-s': 'php',
  bash: 'bash',
  sh: 'bash',
  json: 'json',
  ts: 'typescript',
  mts: 'typescript',
  cts: 'typescript',
  tsx: 'tsx',
  vue: 'vue',
  elm: 'elm',
  js: 'javascript',
  jsx: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  py: 'python',
  pyw: 'python',
  pyi: 'python',
  el: 'elisp',
  emacs: 'elisp',
  ex: 'elixir',
  exs: 'elixir',
  go: 'go',
  eex: 'embedded_template',
  heex: 'embedded_template',
  leex: 'embedded_template',
  html: 'html',
  htm: 'html',
  java: 'java',
  lua: 'lua',
  ocaml: 'ocaml',
  ml: 'ocaml',
  mli: 'ocaml',
  ql: 'ql',
  res: 'rescript',
  resi: 'rescript',
  rb: 'ruby',
  erb: 'ruby',
  rs: 'rust',
  rdl: 'systemrdl',
  toml: 'toml'
}

export const EMBEDDING_IGNORE_LIST = [
  '__mocks__',
  '__tests__',
  '.babelrc.js',
  '.babelrc.json',
  '.babelrc',
  '.circleci',
  '.classpath',
  '.dockerignore',
  '.DS_Store',
  '.eclipse',
  '.editorconfig',
  '.env.development',
  '.env.production',
  '.env.test',
  '.env',
  '.eslintignore',
  '.eslintrc.js',
  '.eslintrc.json',
  '.eslintrc',
  '.git',
  '.gitattributes',
  '.gitignore',
  '.gitlab-ci.yml',
  '.hg',
  '.idea',
  '.log',
  '.md',
  '.prettierrc.js',
  '.prettierrc.json',
  '.prettierrc',
  '.project',
  '.settings',
  '.storybook',
  '.stylelintrc.js',
  '.stylelintrc.json',
  '.stylelintrc',
  '.svn',
  '.swp',
  '.temp',
  '.tmp',
  '.travis.yml',
  '.vscode',
  'archive',
  'archives',
  'assets',
  'backup',
  'backups',
  'bin',
  'bower_components',
  'build.gradle',
  'build',
  'CHANGELOG.md',
  'composer.json',
  'composer.lock',
  'coverage',
  'css',
  'demo',
  'demos',
  'dist',
  'doc',
  'Doc',
  'Dockerfile',
  'docs',
  'Docs',
  'documentation',
  'example',
  'examples',
  'Gemfile.lock',
  'Gemfile',
  'jenkins',
  'json',
  'LICENSE',
  'Makefile',
  'node_modules',
  'out',
  'package-lock.json',
  'package.json',
  'pom.xml',
  'private',
  'Procfile',
  'public',
  'README.md',
  'release',
  'reports',
  'Resources',
  'sample',
  'samples',
  'scripts',
  'storybook-static',
  'svg',
  'temp',
  'test',
  'Test',
  'tests',
  'Tests',
  'Thumbs.db',
  'tmp',
  'tools',
  'tsconfig.json',
  'util',
  'utils',
  'vagrantfile',
  'webpack.config.js',
  'yarn.lock',
  'yml',
]

export const MULTILINE_OUTSIDE = [
  'class_body',
  'interface_body',
  'interface',
  'class',
  'program',
  'identifier',
  'export'
]

export const MULTILINE_INSIDE = [
  'body',
  'export_statement',
  'formal_parameters',
  'function_definition',
  'named_imports',
  'object_pattern',
  'object_type',
  'object',
  'parenthesized_expression',
  'statement_block'
]

export const MULTILINE_TYPES = [...MULTILINE_OUTSIDE, ...MULTILINE_INSIDE]

export const MULTI_LINE_DELIMITERS = ['\n\n', '\r\n\r\n']

export const MULTI_LINE_REACT = [
  'jsx_closing_element',
  'jsx_element',
  'jsx_element',
  'jsx_opening_element',
  'jsx_self_closing_element'
]
