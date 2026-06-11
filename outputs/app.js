const els = {
  gameSelectPanel: document.querySelector("#gameSelectPanel"),
  setupPanel: document.querySelector("#setupPanel"),
  gamePanel: document.querySelector("#gamePanel"),
  resultPanel: document.querySelector("#resultPanel"),
  tagline: document.querySelector("[data-i18n='tagline']"),
  adFallback: document.querySelector("#adFallback"),
  adsenseContainer: document.querySelector("#adsenseContainer"),
  contactFormLink: document.querySelector("#contactFormLink"),
  footerBackLink: document.querySelector("[data-i18n='footerBack']"),
  miniStats: document.querySelector(".mini-stats"),
  languageSelect: document.querySelector("#languageSelect"),
  leftDigits: document.querySelector("#leftDigits"),
  leftDigitsValue: document.querySelector("#leftDigitsValue"),
  rightDigits: document.querySelector("#rightDigits"),
  rightDigitsValue: document.querySelector("#rightDigitsValue"),
  operation: document.querySelector("#operation"),
  operationValue: document.querySelector("#operationValue"),
  questionCount: document.querySelector("#questionCount"),
  questionCountSlider: document.querySelector("#questionCountSlider"),
  openMentalMathButton: document.querySelector("#openMentalMathButton"),
  openPolyominoButton: document.querySelector("#openPolyominoButton"),
  startButton: document.querySelector("#startButton"),
  dailyChallengeButton: document.querySelector("#dailyChallengeButton"),
  backToGamesButton: document.querySelector("#backToGamesButton"),
  polyominoPanel: document.querySelector("#polyominoPanel"),
  polyominoBackButton: document.querySelector("#polyominoBackButton"),
  polyominoNewButton: document.querySelector("#polyominoNewButton"),
  polyominoSizeInput: document.querySelector("#polyominoSizeInput"),
  polyominoSizeSlider: document.querySelector("#polyominoSizeSlider"),
  polyominoRotateButton: document.querySelector("#polyominoRotateButton"),
  polyominoUndoButton: document.querySelector("#polyominoUndoButton"),
  polyominoResetButton: document.querySelector("#polyominoResetButton"),
  polyominoStartButton: document.querySelector("#polyominoStartButton"),
  polyominoDailyButton: document.querySelector("#polyominoDailyButton"),
  polyominoStatus: document.querySelector("#polyominoStatus"),
  polyominoPlay: document.querySelector(".polyomino-play"),
  polyominoBoard: document.querySelector("#polyominoBoard"),
  polyominoPieces: document.querySelector("#polyominoPieces"),
  polyoleResult: document.querySelector("#polyoleResult"),
  polyoleResultSize: document.querySelector("#polyoleResultSize"),
  polyoleResultTime: document.querySelector("#polyoleResultTime"),
  polyoleRecordSummary: document.querySelector("#polyoleRecordSummary"),
  polyoleRecordList: document.querySelector("#polyoleRecordList"),
  clearPolyoleRecordsButton: document.querySelector("#clearPolyoleRecordsButton"),
  resetButton: document.querySelector("#resetButton"),
  retryButton: document.querySelector("#retryButton"),
  backToSetupButton: document.querySelector("#backToSetupButton"),
  shareMentalcButton: document.querySelector("#shareMentalcButton"),
  sharePolyoleButton: document.querySelector("#sharePolyoleButton"),
  clearRecordsButton: document.querySelector("#clearRecordsButton"),
  questionText: document.querySelector("#questionText"),
  answerText: document.querySelector("#answerText"),
  feedbackText: document.querySelector("#feedbackText"),
  progressText: document.querySelector("#progressText"),
  timerText: document.querySelector("#timerText"),
  questionTotalStat: document.querySelector("#questionTotalStat"),
  totalTimeStat: document.querySelector("#totalTimeStat"),
  averageTimeStat: document.querySelector("#averageTimeStat"),
  historyBody: document.querySelector("#historyBody"),
  recordSummary: document.querySelector("#recordSummary"),
  recordList: document.querySelector("#recordList"),
  mentalGameInfoPanels: document.querySelectorAll(".mental-game-info"),
  polyoleGameInfoPanels: document.querySelectorAll(".polyole-game-info"),
  homeInfoPanels: document.querySelectorAll(".home-info"),
};

const adsenseConfig = {
  clientId: "ca-pub-6132093149042122",
  slotId: "",
};

const contactFormUrls = {
  ja: "https://forms.gle/HGwRtT66ERJDQq9S9",
  en: "https://forms.gle/7oGPfJhtYX4wsTbF9",
  es: "https://forms.gle/tJuFsS2Svqw41pTT6",
  zh: "https://forms.gle/X7c7pjYu9c1W6E8f6",
  de: "https://forms.gle/J5XhqanZigZy7Z2WA",
  nl: "https://forms.gle/5bNF625gQJNMMKjD8",
  ko: "https://forms.gle/yFVoziJk8YTiyABo6",
};

const languageUrls = {
  ja: "/",
  en: "/en/",
  es: "/es/",
  zh: "/zh/",
  de: "/de/",
  nl: "/nl/",
  ko: "/ko/",
};

const recordStorageKey = "mentalc-records-v1";
const polyoleRecordStorageKey = "polyole-records-v1";
const dailyChallengeQuestionCount = 5;

const translations = {
  ja: {
    htmlLang: "ja",
    dailyChallenge: "デイリーチャレンジ",
    dailyChallengeRecord: "デイリー",
    polyoleDailyChallenge: "デイリーチャレンジ",
    shareResult: "共有",
    shareMentalcText: "Mentalcで{questions}を{time}でクリアしました。",
    sharePolyoleText: "Polyoleの{size}を{time}でクリアしました。",
    siteTagline: "短く遊べる、シンプルな脳トレ。",
    tagline: "暗算を、短く淡々と。",
    language: "言語",
    progressStatus: "進行状況",
    gameArea: "暗算ゲーム",
    settings: "設定",
    gameSelectTitle: "ゲーム選択",
    gameSelectIntro:
      "Mentalcは、暗算ゲーム、計算練習、脳トレ、ロジックパズルを短い時間で遊べるシンプルなゲームサイトです。集中力、計算力、空間認識を鍛えるゲームを追加していきます。",
    mentalMathLabel: "暗算ゲーム",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "桁数、四則演算、問題数を選んで、暗算練習、計算力トレーニング、反応速度を鍛えます。",
    playMentalMath: "このゲームで遊ぶ",
    comingSoonLabel: "準備中",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "次の脳トレゲームを追加予定です。",
    polyominoLabel: "パズル",
    polyominoTitle: "Polyole",
    polyominoBody: "形の違うピースを並べて、正方形の盤面をすき間なく埋めるロジックパズルです。",
    polyominoIntro: "ピースを選び、盤面をすき間なく埋めてください。",
    playPolyomino: "このゲームで遊ぶ",
    boardSize: "盤面サイズ",
    newPuzzle: "新しい問題",
    rotatePiece: "回転",
    undoMove: "戻す",
    resetPuzzle: "リセット",
    selectPiece: "ピースを選んでください。",
    placePiece: "ピースを盤面へドラッグして配置します。",
    polyominoReady: "盤面サイズを選んで開始してください。",
    invalidPlacement: "そこには置けません。",
    puzzleComplete: "完成です。",
    polyoleAboutTitle: "Polyoleについて",
    polyoleAboutBody: "Polyoleは、形の違うピースを正方形の盤面にすき間なく配置するポリオミノ風のロジックパズルゲームです。盤面サイズを変えて、空間認識、集中力、試行錯誤を短い時間で練習できます。",
    polyoleHowToTitle: "Polyoleの遊び方",
    polyoleHowToBody: "盤面サイズを選んで開始します。ピースを盤面へドラッグして配置し、必要に応じて回転や戻す操作を使います。すべてのマスを埋めると完成です。",
    polyoleTipsTitle: "Polyoleのコツ",
    polyoleTipsBody: "大きなピースや角に合うピースから置くと進めやすくなります。置けないときは回転や戻す操作を使い、盤面のすき間を減らしましょう。",
    polyoleResultTitle: "Polyole 結果",
    completedBoard: "完成した盤面",
    polyoleRecordsTitle: "Polyole 最近の記録",
    pieceUnit: "ピース",
    backToGames: "ゲーム選択へ戻る",
    start: "開始",
    leftDigits: "左の桁数",
    rightDigits: "右の桁数",
    operation: "演算",
    questionCount: "問題数",
    result: "結果",
    retry: "もう一度",
    backToSettings: "設定へ戻る",
    totalTime: "合計時間",
    averageTime: "平均時間",
    question: "問題",
    answer: "答え",
    time: "時間",
    mistakes: "ミス",
    keypad: "テンキー",
    inputHint: "テンキーで入力",
    wrong: "違います",
    ad: "広告",
    adPlaceholder: "ここに広告枠を配置",
    digitUnit: "桁",
    questionUnit: "問",
    secondUnit: "秒",
    operations: ["足し算", "引き算", "掛け算", "割り算"],
    aboutTitle: "Mentalcについて",
    aboutBody:
      "Mentalcは、足し算、引き算、掛け算、割り算を短い時間で練習できる暗算ゲームです。桁数と問題数を自由に変えて、計算練習、算数の反復練習、計算力トレーニング、脳トレに使えます。",
    howToTitle: "使い方",
    howToBody:
      "左右の桁数、演算、問題数を選んで開始します。答えは画面のテンキーかキーボードで入力できます。正解すると自動で次の問題に進み、最後に時間と履歴を確認できます。",
    practiceTitle: "暗算練習のコツ",
    practiceBody:
      "最初は1桁の足し算を少ない問題数で始め、慣れてきたら桁数や掛け算を増やすのがおすすめです。毎回の記録を見ながら、正確さを保ったまま少しずつ時間を縮めましょう。",
    recordsTitle: "最近の記録",
    clearRecords: "消去",
    noRecords: "まだ記録はありません。",
    bestRecord: "最速",
    latestRecord: "最新",
    privacyTitle: "プライバシーポリシー",
    privacyBody:
      "Mentalcは、最近のゲーム記録をこの端末のブラウザ内に保存します。この記録はサーバーへ送信されません。広告配信やアクセス解析を導入する場合、第三者事業者がCookie、広告ID、IPアドレス、ブラウザ情報などを利用することがあります。利用者はブラウザ設定からCookieを無効にできます。",
    termsTitle: "利用規約",
    termsBody:
      "Mentalcは脳トレ、暗算、パズルなどのゲームを提供する無料サイトです。正確性や継続的な提供を保証するものではありません。利用者は自己の責任で本サイトを利用します。",
    contactTitle: "お問い合わせ",
    contactBody:
      "Mentalcへのご意見、不具合報告、広告掲載や運営に関するお問い合わせは、Googleフォームからお送りください。",
    contactFormLink: "お問い合わせフォームを開く",
    footerBack: "ゲームへ戻る",
  },
  en: {
    htmlLang: "en",
    dailyChallenge: "Daily Challenge",
    dailyChallengeRecord: "Daily",
    polyoleDailyChallenge: "Daily Challenge",
    shareResult: "Share",
    shareMentalcText: "I cleared {questions} on Mentalc in {time}.",
    sharePolyoleText: "I cleared Polyole {size} in {time}.",
    siteTagline: "Simple brain training for short breaks.",
    tagline: "Mental math, short and steady.",
    language: "Language",
    progressStatus: "Progress",
    gameArea: "Mental math game",
    settings: "Settings",
    gameSelectTitle: "Choose a game",
    gameSelectIntro:
      "Mentalc is a simple site for brain training games, mental math practice, math games, and logic puzzles. More games for focus, calculation speed, and spatial thinking will be added over time.",
    mentalMathLabel: "Mental math game",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "Choose digits, arithmetic operations, and question count to practice mental math, calculation speed, and quick responses.",
    playMentalMath: "Play this game",
    comingSoonLabel: "Coming soon",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "More brain training games will be added here.",
    polyominoLabel: "Puzzle",
    polyominoTitle: "Polyole",
    polyominoBody: "Arrange different shaped pieces to fill a square board without gaps in a quiet logic puzzle.",
    polyominoIntro: "Choose a piece and fill the board without gaps.",
    playPolyomino: "Play this game",
    boardSize: "Board size",
    newPuzzle: "New puzzle",
    rotatePiece: "Rotate",
    undoMove: "Undo",
    resetPuzzle: "Reset",
    selectPiece: "Choose a piece.",
    placePiece: "Drag a piece onto the board to place it.",
    polyominoReady: "Choose a board size, then press Start.",
    invalidPlacement: "It cannot be placed there.",
    puzzleComplete: "Complete.",
    polyoleAboutTitle: "About Polyole",
    polyoleAboutBody: "Polyole is a polyomino-style logic puzzle game where you fill a square board with different shaped pieces. Change the board size to practice spatial thinking, focus, and trial-and-error in short sessions.",
    polyoleHowToTitle: "How to Play Polyole",
    polyoleHowToBody: "Choose a board size and start. Drag pieces onto the board, rotate or undo as needed, and fill every cell to complete the puzzle.",
    polyoleTipsTitle: "Polyole Tips",
    polyoleTipsBody: "Start with large pieces or pieces that fit corners. When space gets tight, rotate pieces or undo moves to reduce awkward gaps.",
    polyoleResultTitle: "Polyole Result",
    completedBoard: "Completed board",
    polyoleRecordsTitle: "Recent Polyole Records",
    pieceUnit: "pieces",
    backToGames: "Back to games",
    start: "Start",
    leftDigits: "Left digits",
    rightDigits: "Right digits",
    operation: "Operation",
    questionCount: "Questions",
    result: "Result",
    retry: "Retry",
    backToSettings: "Back to settings",
    totalTime: "Total time",
    averageTime: "Average time",
    question: "Question",
    answer: "Answer",
    time: "Time",
    mistakes: "Misses",
    keypad: "Keypad",
    inputHint: "Enter with keypad",
    wrong: "Incorrect",
    ad: "Ad",
    adPlaceholder: "Ad space",
    digitUnit: " digits",
    questionUnit: " questions",
    secondUnit: " sec",
    operations: ["Addition", "Subtraction", "Multiplication", "Division"],
    aboutTitle: "About Mentalc",
    aboutBody:
      "Mentalc is a simple mental math game for practicing addition, subtraction, multiplication, and division. Change the digit length and question count for arithmetic practice, calculation training, math drills, or brain training.",
    howToTitle: "How to Use",
    howToBody:
      "Choose the digit length, operation, and number of questions, then start. Enter answers with the on-screen keypad or your keyboard. A correct answer moves to the next question automatically, and the result screen shows your time and history.",
    practiceTitle: "Practice Tips",
    practiceBody:
      "Start with a small set of one-digit addition questions. As you get comfortable, increase the digit length or add multiplication. Use your recent records to reduce time gradually while keeping your answers accurate.",
    recordsTitle: "Recent Records",
    clearRecords: "Clear",
    noRecords: "No records yet.",
    bestRecord: "Best",
    latestRecord: "Latest",
    privacyTitle: "Privacy Policy",
    privacyBody:
      "Mentalc stores recent game records only in this browser on this device. These records are not sent to a server. If advertising or analytics are enabled, third-party providers may use cookies, advertising IDs, IP addresses, browser information, or similar technologies. Users can disable cookies in their browser settings.",
    termsTitle: "Terms of Use",
    termsBody:
      "Mentalc is a free site for brain training, mental math, puzzle, and similar games. Accuracy and continuous availability are not guaranteed. Users use this site at their own responsibility.",
    contactTitle: "Contact",
    contactBody:
      "For feedback, bug reports, advertising, or site operation inquiries, please use the Google Form.",
    contactFormLink: "Open contact form",
    footerBack: "Back to game",
  },
  es: {
    htmlLang: "es",
    dailyChallenge: "Reto diario",
    dailyChallengeRecord: "Diario",
    polyoleDailyChallenge: "Reto diario",
    shareResult: "Compartir",
    shareMentalcText: "Completé {questions} en Mentalc en {time}.",
    sharePolyoleText: "Completé Polyole {size} en {time}.",
    siteTagline: "Entrenamiento cerebral sencillo para pausas cortas.",
    tagline: "Cálculo mental, breve y constante.",
    language: "Idioma",
    progressStatus: "Progreso",
    gameArea: "Juego de cálculo mental",
    settings: "Configuración",
    gameSelectTitle: "Elige un juego",
    gameSelectIntro:
      "Mentalc es un sitio de juegos sencillos para entrenamiento cerebral, cálculo mental, juegos de matemáticas y rompecabezas. Seguiremos añadiendo juegos para practicar concentración, rapidez de cálculo y lógica.",
    mentalMathLabel: "Juego de cálculo mental",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "Elige cifras, operaciones y número de preguntas para practicar cálculo mental, rapidez y reflejos matemáticos.",
    playMentalMath: "Jugar",
    comingSoonLabel: "Próximamente",
    comingSoonTitle: "Próximamente",
    comingSoonBody: "Aquí se añadirán más juegos de entrenamiento cerebral.",
    polyominoLabel: "Rompecabezas",
    polyominoTitle: "Polyole",
    polyominoBody: "Coloca piezas de distintas formas para llenar un tablero cuadrado sin dejar huecos.",
    polyominoIntro: "Elige una pieza y llena el tablero sin huecos.",
    playPolyomino: "Jugar",
    boardSize: "Tamaño del tablero",
    newPuzzle: "Nuevo puzzle",
    rotatePiece: "Girar",
    undoMove: "Deshacer",
    resetPuzzle: "Reiniciar",
    selectPiece: "Elige una pieza.",
    placePiece: "Arrastra una pieza al tablero para colocarla.",
    polyominoReady: "Elige el tamaño del tablero y pulsa Iniciar.",
    invalidPlacement: "No se puede colocar ahí.",
    puzzleComplete: "Completado.",
    polyoleAboutTitle: "Acerca de Polyole",
    polyoleAboutBody:
      "Polyole es un rompecabezas de piezas tipo poliominó en el que llenas un tablero cuadrado con formas diferentes. Cambia el tamaño del tablero para practicar visión espacial, lógica y ensayo y error en partidas cortas.",
    polyoleHowToTitle: "Cómo jugar a Polyole",
    polyoleHowToBody:
      "Elige el tamaño del tablero e inicia la partida. Arrastra piezas al tablero, gíralas o deshaz movimientos cuando sea necesario, y llena todas las casillas para completar el puzzle.",
    polyoleTipsTitle: "Consejos para Polyole",
    polyoleTipsBody:
      "Empieza por las piezas grandes o por las que encajan en las esquinas. Cuando el espacio se reduce, girar piezas y deshacer movimientos ayuda a evitar huecos difíciles.",
    polyoleResultTitle: "Resultado de Polyole",
    completedBoard: "Tablero completado",
    polyoleRecordsTitle: "Registros recientes de Polyole",
    pieceUnit: "piezas",
    backToGames: "Volver a juegos",
    start: "Iniciar",
    leftDigits: "Cifras izquierdas",
    rightDigits: "Cifras derechas",
    operation: "Operación",
    questionCount: "Preguntas",
    result: "Resultado",
    retry: "Reintentar",
    backToSettings: "Volver a configuración",
    totalTime: "Tiempo total",
    averageTime: "Tiempo promedio",
    question: "Pregunta",
    answer: "Respuesta",
    time: "Tiempo",
    mistakes: "Errores",
    keypad: "Teclado numérico",
    inputHint: "Introduce con el teclado",
    wrong: "Incorrecto",
    ad: "Anuncio",
    adPlaceholder: "Espacio publicitario",
    digitUnit: " cifras",
    questionUnit: " preguntas",
    secondUnit: " s",
    operations: ["Suma", "Resta", "Multiplicación", "División"],
    aboutTitle: "Acerca de Mentalc",
    aboutBody:
      "Mentalc es un juego de cálculo mental para practicar suma, resta, multiplicación y división en sesiones cortas. Ajusta las cifras y el número de preguntas para usarlo como práctica de matemáticas, entrenamiento de cálculo y entrenamiento cerebral.",
    howToTitle: "Cómo usarlo",
    howToBody:
      "Elige las cifras, la operación y el número de preguntas, y pulsa iniciar. Escribe las respuestas con el teclado en pantalla o con tu teclado físico. Al acertar, pasarás automáticamente a la siguiente pregunta.",
    practiceTitle: "Consejos de práctica",
    practiceBody:
      "Empieza con pocas sumas de una cifra. Cuando te sientas cómodo, aumenta las cifras o prueba multiplicaciones. Usa tus registros recientes para mejorar el tiempo sin perder precisión.",
    recordsTitle: "Registros recientes",
    clearRecords: "Borrar",
    noRecords: "Aún no hay registros.",
    bestRecord: "Mejor",
    latestRecord: "Más reciente",
    privacyTitle: "Política de privacidad",
    privacyBody:
      "Mentalc guarda los registros recientes solo en el navegador de este dispositivo. Estos datos no se envían a un servidor. Si se activan anuncios o analíticas, proveedores externos pueden usar cookies, identificadores publicitarios, direcciones IP, información del navegador o tecnologías similares. Puedes desactivar las cookies desde la configuración del navegador.",
    termsTitle: "Términos de uso",
    termsBody:
      "Mentalc es un sitio gratuito de juegos de entrenamiento cerebral, cálculo mental, puzzles y juegos similares. No se garantiza la exactitud ni la disponibilidad continua. El uso del sitio queda bajo responsabilidad del usuario.",
    contactTitle: "Contacto",
    contactBody:
      "Para comentarios, informes de errores, publicidad o consultas sobre el sitio, utiliza el formulario de Google.",
    contactFormLink: "Abrir formulario de contacto",
    footerBack: "Volver al juego",
  },
  zh: {
    htmlLang: "zh-Hans",
    dailyChallenge: "每日挑战",
    dailyChallengeRecord: "每日",
    polyoleDailyChallenge: "每日挑战",
    shareResult: "分享",
    shareMentalcText: "我在 Mentalc 中用 {time} 完成了 {questions}。",
    sharePolyoleText: "我用 {time} 完成了 Polyole {size}。",
    siteTagline: "短时间即可游玩的简洁脑力训练。",
    tagline: "心算，简短而平稳。",
    language: "语言",
    progressStatus: "进度",
    gameArea: "心算游戏",
    settings: "设置",
    gameSelectTitle: "选择游戏",
    gameSelectIntro:
      "Mentalc 是一个简洁的游戏网站，可用于心算游戏、数学练习、脑力训练和逻辑益智游戏。今后还会继续添加训练专注力、计算速度和空间思维的游戏。",
    mentalMathLabel: "心算游戏",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "选择位数、四则运算和题数，练习心算、计算速度和反应能力。",
    playMentalMath: "玩这个游戏",
    comingSoonLabel: "准备中",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "这里将继续添加新的脑力训练游戏。",
    polyominoLabel: "益智",
    polyominoTitle: "Polyole",
    polyominoBody: "排列不同形状的方块，完整填满正方形棋盘，是适合短时间游玩的逻辑拼图。",
    polyominoIntro: "选择一个方块，并将棋盘无空隙地填满。",
    playPolyomino: "玩这个游戏",
    boardSize: "棋盘大小",
    newPuzzle: "新题目",
    rotatePiece: "旋转",
    undoMove: "撤销",
    resetPuzzle: "重置",
    selectPiece: "请选择一个方块。",
    placePiece: "将方块拖到棋盘上进行放置。",
    polyominoReady: "请选择棋盘大小，然后点击开始。",
    invalidPlacement: "不能放在这里。",
    puzzleComplete: "完成了。",
    polyoleAboutTitle: "关于 Polyole",
    polyoleAboutBody: "Polyole 是一款用不同形状的方块填满正方形棋盘的方块拼图和逻辑益智游戏。你可以调整棋盘大小，在短时间内练习空间思考、专注力和试错能力。",
    polyoleHowToTitle: "Polyole 的玩法",
    polyoleHowToBody: "选择棋盘大小并开始。将方块拖到棋盘上放置，必要时使用旋转或撤销，填满所有格子即可完成。",
    polyoleTipsTitle: "Polyole 技巧",
    polyoleTipsBody: "可以先放较大的方块或适合角落的方块。放不下时使用旋转或撤销，尽量减少难处理的空隙。",
    polyoleResultTitle: "Polyole 结果",
    completedBoard: "完成的棋盘",
    polyoleRecordsTitle: "Polyole 最近记录",
    pieceUnit: "块",
    backToGames: "返回游戏选择",
    start: "开始",
    leftDigits: "左侧位数",
    rightDigits: "右侧位数",
    operation: "运算",
    questionCount: "题数",
    result: "结果",
    retry: "再来一次",
    backToSettings: "返回设置",
    totalTime: "总时间",
    averageTime: "平均时间",
    question: "题目",
    answer: "答案",
    time: "时间",
    mistakes: "错误",
    keypad: "数字键盘",
    inputHint: "用数字键盘输入",
    wrong: "不正确",
    ad: "广告",
    adPlaceholder: "广告位",
    digitUnit: "位",
    questionUnit: "题",
    secondUnit: "秒",
    operations: ["加法", "减法", "乘法", "除法"],
    aboutTitle: "关于 Mentalc",
    aboutBody:
      "Mentalc 是一款简单的心算游戏，可练习加法、减法、乘法和除法。你可以调整位数和题数，用于心算练习、数学练习、计算训练和脑力训练。",
    howToTitle: "使用方法",
    howToBody:
      "选择左右位数、运算方式和题数后开始。可以使用屏幕上的数字键盘或实体键盘输入答案。答对后会自动进入下一题，结束后可查看用时和答题记录。",
    practiceTitle: "心算练习建议",
    practiceBody:
      "建议先从少量一位数加法开始。熟悉后再增加位数或练习乘法。通过查看最近记录，在保持准确的同时逐步缩短用时。",
    recordsTitle: "最近记录",
    clearRecords: "清除",
    noRecords: "还没有记录。",
    bestRecord: "最快",
    latestRecord: "最新",
    privacyTitle: "隐私政策",
    privacyBody:
      "Mentalc 只会把最近的游戏记录保存在此设备的浏览器中，不会发送到服务器。如果启用广告或访问分析，第三方服务商可能会使用 Cookie、广告 ID、IP 地址、浏览器信息或类似技术。用户可以在浏览器设置中禁用 Cookie。",
    termsTitle: "使用条款",
    termsBody:
      "Mentalc 是提供脑力训练、心算、益智等游戏的免费网站。不保证完全准确或持续提供服务。用户应自行承担使用本网站的责任。",
    contactTitle: "联系我们",
    contactBody:
      "如需反馈意见、报告问题，或咨询广告和网站运营相关事项，请使用 Google 表单。",
    contactFormLink: "打开联系表单",
    footerBack: "返回游戏",
  },
  de: {
    htmlLang: "de",
    dailyChallenge: "Tageschallenge",
    dailyChallengeRecord: "Taeglich",
    polyoleDailyChallenge: "Tageschallenge",
    shareResult: "Teilen",
    shareMentalcText: "Ich habe {questions} bei Mentalc in {time} geschafft.",
    sharePolyoleText: "Ich habe Polyole {size} in {time} geschafft.",
    siteTagline: "Einfaches Gehirntraining fuer kurze Pausen.",
    tagline: "Kopfrechnen, kurz und ruhig.",
    language: "Sprache",
    progressStatus: "Fortschritt",
    gameArea: "Kopfrechenspiel",
    settings: "Einstellungen",
    gameSelectTitle: "Spiel waehlen",
    gameSelectIntro:
      "Mentalc ist eine einfache Spielseite fuer Gehirntraining, Kopfrechnen, Mathe-Spiele und Logik-Puzzles in kurzen Pausen. Weitere Spiele fuer Konzentration, Rechentempo und raeumliches Denken werden ergaenzt.",
    mentalMathLabel: "Kopfrechenspiel",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "Trainiere Kopfrechnen, Grundrechenarten, Rechentempo und schnelle Reaktionen mit Stellenzahl, Rechenart und Aufgabenanzahl.",
    playMentalMath: "Dieses Spiel spielen",
    comingSoonLabel: "In Vorbereitung",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "Weitere Gehirntrainingsspiele werden hier ergaenzt.",
    polyominoLabel: "Puzzle",
    polyominoTitle: "Polyole",
    polyominoBody: "Lege verschieden geformte Teile so, dass ein quadratisches Feld ohne Luecken gefuellt wird - ein ruhiges Logik-Puzzle.",
    polyominoIntro: "Waehle ein Teil und fuelle das Feld ohne Luecken.",
    playPolyomino: "Dieses Spiel spielen",
    boardSize: "Feldgroesse",
    newPuzzle: "Neues Puzzle",
    rotatePiece: "Drehen",
    undoMove: "Rueckgaengig",
    resetPuzzle: "Zuruecksetzen",
    selectPiece: "Waehle ein Teil.",
    placePiece: "Ziehe ein Teil auf das Feld, um es zu legen.",
    polyominoReady: "Waehle die Feldgroesse und druecke Start.",
    invalidPlacement: "Dort passt es nicht.",
    puzzleComplete: "Fertig.",
    polyoleAboutTitle: "Ueber Polyole",
    polyoleAboutBody: "Polyole ist ein Polyomino- und Logik-Puzzle, bei dem du ein quadratisches Feld mit verschieden geformten Teilen ohne Luecken fuellst. Mit verschiedenen Feldgroessen trainierst du raeumliches Denken, Konzentration und Ausprobieren.",
    polyoleHowToTitle: "So spielst du Polyole",
    polyoleHowToBody: "Waehle die Feldgroesse und starte. Ziehe Teile auf das Feld, drehe sie bei Bedarf oder mache Zuege rueckgaengig. Fuellst du alle Zellen, ist das Puzzle geloest.",
    polyoleTipsTitle: "Tipps fuer Polyole",
    polyoleTipsBody: "Beginne mit grossen Teilen oder passenden Eckteilen. Wenn es eng wird, helfen Drehen und Rueckgaengig, um schwierige Luecken zu vermeiden.",
    polyoleResultTitle: "Polyole Ergebnis",
    completedBoard: "Fertiges Feld",
    polyoleRecordsTitle: "Letzte Polyole Ergebnisse",
    pieceUnit: "Teile",
    backToGames: "Zurueck zur Spielauswahl",
    start: "Start",
    leftDigits: "Linke Stellen",
    rightDigits: "Rechte Stellen",
    operation: "Rechenart",
    questionCount: "Aufgaben",
    result: "Ergebnis",
    retry: "Erneut",
    backToSettings: "Zurueck zu den Einstellungen",
    totalTime: "Gesamtzeit",
    averageTime: "Durchschnittszeit",
    question: "Aufgabe",
    answer: "Antwort",
    time: "Zeit",
    mistakes: "Fehler",
    keypad: "Ziffernblock",
    inputHint: "Mit dem Ziffernblock eingeben",
    wrong: "Falsch",
    ad: "Anzeige",
    adPlaceholder: "Anzeigenbereich",
    digitUnit: " Stellen",
    questionUnit: " Aufgaben",
    secondUnit: " Sek.",
    operations: ["Addition", "Subtraktion", "Multiplikation", "Division"],
    aboutTitle: "Ueber Mentalc",
    aboutBody:
      "Mentalc ist ein einfaches Kopfrechenspiel zum Ueben von Addition, Subtraktion, Multiplikation und Division. Stelle die Anzahl der Stellen und Aufgaben frei ein und nutze es fuer Kopfrechnen, Mathe-Uebungen, Rechentraining und Gehirntraining.",
    howToTitle: "So funktioniert es",
    howToBody:
      "Waehle die Stellenzahl links und rechts, die Rechenart und die Anzahl der Aufgaben aus und starte. Antworten koennen ueber den Ziffernblock auf dem Bildschirm oder ueber die Tastatur eingegeben werden. Bei einer richtigen Antwort geht es automatisch zur naechsten Aufgabe.",
    practiceTitle: "Tipps zum Ueben",
    practiceBody:
      "Beginne mit wenigen einstelligen Additionsaufgaben. Wenn du sicherer wirst, erhoehe die Stellenzahl oder uebe Multiplikation. Nutze deine letzten Ergebnisse, um die Zeit Schritt fuer Schritt zu verbessern, ohne an Genauigkeit zu verlieren.",
    recordsTitle: "Letzte Ergebnisse",
    clearRecords: "Loeschen",
    noRecords: "Noch keine Ergebnisse.",
    bestRecord: "Bestzeit",
    latestRecord: "Neueste",
    privacyTitle: "Datenschutzerklaerung",
    privacyBody:
      "Mentalc speichert die letzten Spielergebnisse nur in diesem Browser auf diesem Geraet. Diese Daten werden nicht an einen Server gesendet. Wenn Werbung oder Analysefunktionen aktiviert werden, koennen Drittanbieter Cookies, Werbe-IDs, IP-Adressen, Browserinformationen oder aehnliche Technologien verwenden. Nutzer koennen Cookies in den Browsereinstellungen deaktivieren.",
    termsTitle: "Nutzungsbedingungen",
    termsBody:
      "Mentalc ist eine kostenlose Website fuer Gehirntraining, Kopfrechnen, Puzzle- und aehnliche Spiele. Genauigkeit und dauerhafte Verfuegbarkeit werden nicht garantiert. Die Nutzung dieser Website erfolgt auf eigene Verantwortung.",
    contactTitle: "Kontakt",
    contactBody:
      "Fuer Feedback, Fehlerberichte, Werbung oder Fragen zum Betrieb der Website nutze bitte das Google-Formular.",
    contactFormLink: "Kontaktformular oeffnen",
    footerBack: "Zurueck zum Spiel",
  },
  nl: {
    htmlLang: "nl",
    dailyChallenge: "Dagelijkse uitdaging",
    dailyChallengeRecord: "Dagelijks",
    polyoleDailyChallenge: "Dagelijkse uitdaging",
    shareResult: "Delen",
    shareMentalcText: "Ik heb {questions} op Mentalc voltooid in {time}.",
    sharePolyoleText: "Ik heb Polyole {size} voltooid in {time}.",
    siteTagline: "Eenvoudige hersentraining voor korte pauzes.",
    tagline: "Hoofdrekenen, kort en rustig.",
    language: "Taal",
    progressStatus: "Voortgang",
    gameArea: "Hoofdreken spel",
    settings: "Instellingen",
    gameSelectTitle: "Kies een spel",
    gameSelectIntro:
      "Mentalc is een eenvoudige spelsite voor hersentraining, hoofdrekenen, rekenspelletjes en logische puzzels in korte pauzes. Later worden meer spellen voor focus, rekensnelheid en ruimtelijk inzicht toegevoegd.",
    mentalMathLabel: "Hoofdrekenspel",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "Oefen hoofdrekenen, basisbewerkingen, rekensnelheid en snelle reacties met cijfers, bewerkingen en aantal vragen.",
    playMentalMath: "Speel dit spel",
    comingSoonLabel: "Binnenkort",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "Hier worden later meer hersentrainingsspellen toegevoegd.",
    polyominoLabel: "Puzzel",
    polyominoTitle: "Polyole",
    polyominoBody: "Leg verschillend gevormde stukken neer om een vierkant bord zonder gaten te vullen in een rustige logische puzzel.",
    polyominoIntro: "Kies een stuk en vul het bord zonder gaten.",
    playPolyomino: "Speel dit spel",
    boardSize: "Bordgrootte",
    newPuzzle: "Nieuwe puzzel",
    rotatePiece: "Draaien",
    undoMove: "Ongedaan",
    resetPuzzle: "Reset",
    selectPiece: "Kies een stuk.",
    placePiece: "Sleep een stuk naar het bord om het te plaatsen.",
    polyominoReady: "Kies een bordgrootte en druk op Start.",
    invalidPlacement: "Dat past daar niet.",
    puzzleComplete: "Voltooid.",
    polyoleAboutTitle: "Over Polyole",
    polyoleAboutBody: "Polyole is een polyomino-achtige logische puzzel waarin je een vierkant bord vult met verschillend gevormde stukken. Met verschillende bordgroottes oefen je ruimtelijk inzicht, concentratie en uitproberen in korte sessies.",
    polyoleHowToTitle: "Hoe speel je Polyole",
    polyoleHowToBody: "Kies de bordgrootte en start. Sleep stukken naar het bord, draai ze of maak zetten ongedaan wanneer nodig. Vul alle vakjes om de puzzel te voltooien.",
    polyoleTipsTitle: "Polyole tips",
    polyoleTipsBody: "Begin met grote stukken of stukken die in hoeken passen. Gebruik draaien en ongedaan maken wanneer er lastige gaten ontstaan.",
    polyoleResultTitle: "Polyole resultaat",
    completedBoard: "Voltooid bord",
    polyoleRecordsTitle: "Recente Polyole records",
    pieceUnit: "stukken",
    backToGames: "Terug naar spellen",
    start: "Start",
    leftDigits: "Linker cijfers",
    rightDigits: "Rechter cijfers",
    operation: "Bewerking",
    questionCount: "Vragen",
    result: "Resultaat",
    retry: "Opnieuw",
    backToSettings: "Terug naar instellingen",
    totalTime: "Totale tijd",
    averageTime: "Gemiddelde tijd",
    question: "Vraag",
    answer: "Antwoord",
    time: "Tijd",
    mistakes: "Fouten",
    keypad: "Numeriek toetsenbord",
    inputHint: "Voer in met het toetsenbord",
    wrong: "Onjuist",
    ad: "Advertentie",
    adPlaceholder: "Advertentieruimte",
    digitUnit: " cijfers",
    questionUnit: " vragen",
    secondUnit: " sec",
    operations: ["Optellen", "Aftrekken", "Vermenigvuldigen", "Delen"],
    aboutTitle: "Over Mentalc",
    aboutBody:
      "Mentalc is een eenvoudig hoofdrekenspel om optellen, aftrekken, vermenigvuldigen en delen te oefenen. Pas het aantal cijfers en vragen aan voor hoofdrekenen, rekensommen, rekentraining en hersentraining.",
    howToTitle: "Hoe werkt het",
    howToBody:
      "Kies het aantal cijfers links en rechts, de bewerking en het aantal vragen, en start. Antwoorden kun je invoeren met het toetsenbord op het scherm of met je fysieke toetsenbord. Bij een goed antwoord ga je automatisch naar de volgende vraag.",
    practiceTitle: "Oefentips",
    practiceBody:
      "Begin met een kleine set optelsommen met een cijfer. Als dat goed gaat, verhoog je het aantal cijfers of oefen je vermenigvuldigen. Gebruik je recente resultaten om stap voor stap sneller te worden zonder nauwkeurigheid te verliezen.",
    recordsTitle: "Recente records",
    clearRecords: "Wissen",
    noRecords: "Nog geen records.",
    bestRecord: "Beste",
    latestRecord: "Nieuwste",
    privacyTitle: "Privacybeleid",
    privacyBody:
      "Mentalc bewaart recente spelresultaten alleen in deze browser op dit apparaat. Deze gegevens worden niet naar een server verzonden. Als advertenties of analysefuncties worden ingeschakeld, kunnen externe aanbieders cookies, advertentie-ID's, IP-adressen, browserinformatie of vergelijkbare technologieen gebruiken. Gebruikers kunnen cookies uitschakelen in de browserinstellingen.",
    termsTitle: "Gebruiksvoorwaarden",
    termsBody:
      "Mentalc is een gratis site voor hersentraining, hoofdrekenen, puzzels en vergelijkbare spellen. Nauwkeurigheid en voortdurende beschikbaarheid worden niet gegarandeerd. Gebruik van deze site is op eigen verantwoordelijkheid.",
    contactTitle: "Contact",
    contactBody:
      "Gebruik het Google-formulier voor feedback, foutmeldingen, advertenties of vragen over het beheer van de site.",
    contactFormLink: "Contactformulier openen",
    footerBack: "Terug naar het spel",
  },
  ko: {
    htmlLang: "ko",
    dailyChallenge: "데일리 챌린지",
    dailyChallengeRecord: "데일리",
    polyoleDailyChallenge: "데일리 챌린지",
    shareResult: "공유",
    shareMentalcText: "Mentalc에서 {questions}를 {time}에 완료했습니다.",
    sharePolyoleText: "Polyole {size}를 {time}에 완료했습니다.",
    siteTagline: "짧게 즐기는 간단한 두뇌 훈련.",
    tagline: "암산을 짧고 차분하게.",
    language: "언어",
    progressStatus: "진행 상황",
    gameArea: "암산 게임",
    settings: "설정",
    gameSelectTitle: "게임 선택",
    gameSelectIntro:
      "Mentalc는 암산 게임, 수학 연습, 두뇌 훈련, 논리 퍼즐을 짧게 즐길 수 있는 간단한 게임 사이트입니다. 집중력, 계산 속도, 공간 사고력을 연습할 수 있는 게임을 계속 추가할 예정입니다.",
    mentalMathLabel: "암산 게임",
    mentalMathTitle: "Mentalc",
    mentalMathBody: "자릿수, 사칙연산, 문제 수를 선택해 암산, 계산 속도, 빠른 반응을 연습합니다.",
    playMentalMath: "이 게임 플레이",
    comingSoonLabel: "준비 중",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "새로운 두뇌 훈련 게임을 추가할 예정입니다.",
    polyominoLabel: "퍼즐",
    polyominoTitle: "Polyole",
    polyominoBody: "서로 다른 모양의 조각을 놓아 정사각형 판을 빈틈없이 채우는 조용한 논리 퍼즐입니다.",
    polyominoIntro: "조각을 선택하고 판을 빈틈없이 채워 보세요.",
    playPolyomino: "이 게임 플레이",
    boardSize: "판 크기",
    newPuzzle: "새 퍼즐",
    rotatePiece: "회전",
    undoMove: "되돌리기",
    resetPuzzle: "리셋",
    selectPiece: "조각을 선택하세요.",
    placePiece: "조각을 판 위로 드래그해 배치합니다.",
    polyominoReady: "판 크기를 선택한 뒤 시작을 누르세요.",
    invalidPlacement: "그곳에는 놓을 수 없습니다.",
    puzzleComplete: "완성했습니다.",
    polyoleAboutTitle: "Polyole 소개",
    polyoleAboutBody: "Polyole은 서로 다른 모양의 조각으로 정사각형 판을 빈틈없이 채우는 폴리오미노 스타일의 논리 퍼즐 게임입니다. 판 크기를 바꾸며 공간 감각, 집중력, 시행착오를 짧게 연습할 수 있습니다.",
    polyoleHowToTitle: "Polyole 플레이 방법",
    polyoleHowToBody: "판 크기를 고르고 시작합니다. 조각을 판 위로 드래그해 놓고, 필요하면 회전이나 되돌리기를 사용하세요. 모든 칸을 채우면 완성입니다.",
    polyoleTipsTitle: "Polyole 팁",
    polyoleTipsBody: "큰 조각이나 모서리에 맞는 조각부터 놓으면 쉽습니다. 빈틈이 애매할 때는 회전과 되돌리기를 사용하세요.",
    polyoleResultTitle: "Polyole 결과",
    completedBoard: "완성된 판",
    polyoleRecordsTitle: "최근 Polyole 기록",
    pieceUnit: "조각",
    backToGames: "게임 선택으로 돌아가기",
    start: "시작",
    leftDigits: "왼쪽 자릿수",
    rightDigits: "오른쪽 자릿수",
    operation: "연산",
    questionCount: "문제 수",
    result: "결과",
    retry: "다시 하기",
    backToSettings: "설정으로 돌아가기",
    totalTime: "전체 시간",
    averageTime: "평균 시간",
    question: "문제",
    answer: "답",
    time: "시간",
    mistakes: "실수",
    keypad: "숫자 키패드",
    inputHint: "숫자 키패드로 입력",
    wrong: "틀렸습니다",
    ad: "광고",
    adPlaceholder: "광고 영역",
    digitUnit: "자리",
    questionUnit: "문제",
    secondUnit: "초",
    operations: ["덧셈", "뺄셈", "곱셈", "나눗셈"],
    aboutTitle: "Mentalc 소개",
    aboutBody:
      "Mentalc는 덧셈, 뺄셈, 곱셈, 나눗셈을 연습할 수 있는 간단한 암산 게임입니다. 자릿수와 문제 수를 자유롭게 설정해 암산 연습, 수학 연습, 계산 훈련, 두뇌 훈련에 사용할 수 있습니다.",
    howToTitle: "사용 방법",
    howToBody:
      "왼쪽과 오른쪽의 자릿수, 연산, 문제 수를 선택한 뒤 시작합니다. 답은 화면의 숫자 키패드나 키보드로 입력할 수 있습니다. 정답을 입력하면 자동으로 다음 문제로 넘어가며, 마지막에 시간과 기록을 확인할 수 있습니다.",
    practiceTitle: "암산 연습 팁",
    practiceBody:
      "처음에는 한 자리 덧셈을 적은 문제 수로 시작해 보세요. 익숙해지면 자릿수를 늘리거나 곱셈을 연습하는 것이 좋습니다. 최근 기록을 보면서 정확도를 유지한 채 조금씩 시간을 줄여 보세요.",
    recordsTitle: "최근 기록",
    clearRecords: "삭제",
    noRecords: "아직 기록이 없습니다.",
    bestRecord: "최고 기록",
    latestRecord: "최근",
    privacyTitle: "개인정보 처리방침",
    privacyBody:
      "Mentalc는 최근 게임 기록을 이 기기의 브라우저 안에만 저장합니다. 이 기록은 서버로 전송되지 않습니다. 광고 또는 분석 기능을 사용하는 경우, 제3자 제공업체가 쿠키, 광고 ID, IP 주소, 브라우저 정보 또는 유사한 기술을 사용할 수 있습니다. 사용자는 브라우저 설정에서 쿠키를 비활성화할 수 있습니다.",
    termsTitle: "이용 약관",
    termsBody:
      "Mentalc는 두뇌 훈련, 암산, 퍼즐 등 다양한 게임을 제공하는 무료 사이트입니다. 정확성이나 지속적인 제공을 보장하지 않습니다. 사용자는 본인의 책임하에 이 사이트를 이용합니다.",
    contactTitle: "문의",
    contactBody:
      "의견, 오류 신고, 광고 또는 사이트 운영 관련 문의는 Google 양식을 이용해 주세요.",
    contactFormLink: "문의 양식 열기",
    footerBack: "게임으로 돌아가기",
  },
};

const operationKeys = ["add", "subtract", "multiply", "divide"];
const operationSymbols = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

let currentLanguage = "ja";
let currentPanel = "select";
let state = createInitialState();
let timerId = null;
const polyominoColors = ["#1d6f62", "#6f7f45", "#2f6f8c", "#8a6f2f", "#8a4b43", "#5e6b7c", "#6f5d8f", "#3f7a66"];
let polyominoState = createPolyominoState();
let polyominoDrag = null;

function createInitialState() {
  return {
    settings: {
      leftDigits: 1,
      rightDigits: 1,
      operation: "add",
      questionCount: 20,
    },
    questions: [],
    currentIndex: 0,
    input: "",
    startedAt: 0,
    questionStartedAt: 0,
    mistakes: 0,
    records: [],
    totalTime: 0,
    averageTime: 0,
    isDaily: false,
    dailyDate: "",
  };
}

function createPolyominoState() {
  return {
    size: 5,
    isStarted: false,
    pieces: [],
    board: [],
    selectedId: null,
    rotation: 0,
    moves: [],
    startedAt: 0,
    totalTime: 0,
    preview: null,
    isDaily: false,
    dailyDate: "",
  };
}

function t(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? key;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getOperationKey() {
  return operationKeys[Number(els.operation.value)] || operationKeys[0];
}

function getOperationLabel(operationKey = getOperationKey()) {
  const index = operationKeys.indexOf(operationKey);
  return t("operations")[index < 0 ? 0 : index];
}

function formatDigits(value) {
  return `${value}${t("digitUnit")}`;
}

function formatQuestionCount(value) {
  return `${value}${t("questionUnit")}`;
}

function formatSeconds(value) {
  return `${value.toFixed(1)}${t("secondUnit")}`;
}

function readSettings() {
  const questionCount = clamp(Number(els.questionCount.value) || 20, 1, 200);
  syncQuestionCount(questionCount);

  return {
    leftDigits: Number(els.leftDigits.value),
    rightDigits: Number(els.rightDigits.value),
    operation: getOperationKey(),
    questionCount,
  };
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "ja";
  els.languageSelect.value = currentLanguage;
  document.documentElement.lang = t("htmlLang");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });

  syncSettingLabels();
  syncQuestionCount(els.questionCount.value);
  refreshFeedbackText();
  refreshResultStats();
  renderHistory();
  renderStoredRecords();
  renderPolyoleRecords();
  renderPolyomino();
  updateContactFormLink();
  updateFooterBackLink();
  updateTagline();
}

function getInitialLanguage() {
  const firstPathPart = window.location.pathname.split("/").filter(Boolean)[0];
  return translations[firstPathPart] ? firstPathPart : "ja";
}

function handleLanguageChange(language) {
  const targetUrl = languageUrls[language] || languageUrls.ja;
  if (window.location.pathname !== targetUrl) {
    window.location.href = targetUrl;
    return;
  }
  applyLanguage(language);
}

function updateContactFormLink() {
  const contactFormUrl = contactFormUrls[currentLanguage];
  if (!contactFormUrl) {
    els.contactFormLink.classList.add("is-hidden");
    els.contactFormLink.removeAttribute("href");
    return;
  }

  els.contactFormLink.href = contactFormUrl;
  els.contactFormLink.classList.remove("is-hidden");
}

function updateFooterBackLink() {
  if (!els.footerBackLink) {
    return;
  }

  const languageUrl = languageUrls[currentLanguage] || languageUrls.ja;
  const targetId = currentPanel === "select" || currentPanel === "polyomino" ? "gameSelectPanel" : "setupPanel";
  els.footerBackLink.href = `${languageUrl}#${targetId}`;
}

function initAdsense() {
  if (!adsenseConfig.clientId || !adsenseConfig.slotId) {
    els.adFallback.classList.remove("is-hidden");
    els.adsenseContainer.classList.add("is-hidden");
    els.adsenseContainer.setAttribute("aria-hidden", "true");
    return;
  }

  els.adFallback.classList.add("is-hidden");
  els.adsenseContainer.classList.remove("is-hidden");
  els.adsenseContainer.removeAttribute("aria-hidden");

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`;
  document.head.appendChild(script);

  const ad = document.createElement("ins");
  ad.className = "adsbygoogle";
  ad.style.display = "block";
  ad.dataset.adClient = adsenseConfig.clientId;
  ad.dataset.adSlot = adsenseConfig.slotId;
  ad.dataset.adFormat = "auto";
  ad.dataset.fullWidthResponsive = "true";
  els.adsenseContainer.appendChild(ad);

  script.addEventListener("load", () => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  });
}

function syncSettingLabels() {
  els.leftDigitsValue.textContent = formatDigits(els.leftDigits.value);
  els.rightDigitsValue.textContent = formatDigits(els.rightDigits.value);
  els.operationValue.textContent = getOperationLabel();
}

function syncQuestionCount(value) {
  if (value === "") {
    els.questionCount.value = "";
    if (!els.setupPanel.classList.contains("is-hidden")) {
      els.progressText.textContent = "0 / -";
    }
    return 20;
  }

  const count = clamp(Number(value) || 20, 1, 200);
  els.questionCount.value = count;
  els.questionCountSlider.value = count;
  if (!els.setupPanel.classList.contains("is-hidden")) {
    els.progressText.textContent = `0 / ${count}`;
  }
  return count;
}

function commitQuestionCountInput() {
  syncQuestionCount(els.questionCount.value === "" ? 20 : els.questionCount.value);
}

function refreshFeedbackText() {
  if (!els.gamePanel.classList.contains("is-hidden")) {
    els.feedbackText.textContent = els.feedbackText.classList.contains("is-error") ? t("wrong") : t("inputHint");
  }
}

function randomByDigits(digits) {
  if (digits === 1) {
    return randomInt(0, 9);
  }
  const min = 10 ** (digits - 1);
  const max = 10 ** digits - 1;
  return randomInt(min, max);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeQuestion(settings) {
  let left = randomByDigits(settings.leftDigits);
  let right = randomByDigits(settings.rightDigits);
  let answer = 0;

  if (settings.operation === "add") {
    answer = left + right;
  }

  if (settings.operation === "subtract") {
    if (right > left) {
      [left, right] = [right, left];
    }
    answer = left - right;
  }

  if (settings.operation === "multiply") {
    answer = left * right;
  }

  if (settings.operation === "divide") {
    right = Math.max(1, right);
    answer = randomByDigits(settings.leftDigits);
    left = answer * right;
  }

  return {
    left,
    right,
    answer,
    label: `${left} ${operationSymbols[settings.operation]} ${right}`,
  };
}

function getDailyDateKey() {
  const today = new Date();
  return [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
}

function createSeededRandom(seedText) {
  let seed = 0;
  for (let index = 0; index < seedText.length; index += 1) {
    seed = (seed * 31 + seedText.charCodeAt(index)) >>> 0;
  }

  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

function seededInt(random, min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

function makeDailyQuestion(random, index) {
  const operations = ["add", "subtract", "multiply", "add", "subtract"];
  const operation = operations[index % operations.length];
  let left = seededInt(random, 2, 19);
  let right = seededInt(random, 2, 9);
  let answer = 0;

  if (operation === "add") {
    left = seededInt(random, 10, 49);
    right = seededInt(random, 2, 29);
    answer = left + right;
  }

  if (operation === "subtract") {
    left = seededInt(random, 20, 79);
    right = seededInt(random, 2, Math.min(39, left));
    answer = left - right;
  }

  if (operation === "multiply") {
    left = seededInt(random, 2, 12);
    right = seededInt(random, 2, 9);
    answer = left * right;
  }

  return {
    left,
    right,
    answer,
    label: `${left} ${operationSymbols[operation]} ${right}`,
  };
}

function makeDailyChallengeQuestions(dateKey) {
  const random = createSeededRandom(`mentalc-daily-${dateKey}`);
  return Array.from({ length: dailyChallengeQuestionCount }, (_, index) => makeDailyQuestion(random, index));
}

function startGame() {
  const settings = readSettings();
  state = createInitialState();
  state.settings = settings;
  state.questions = Array.from({ length: settings.questionCount }, () => makeQuestion(settings));
  state.startedAt = performance.now();
  showPanel("game");
  startQuestion();
  startTimer();
}

function startDailyChallenge() {
  const dateKey = getDailyDateKey();
  state = createInitialState();
  state.isDaily = true;
  state.dailyDate = dateKey;
  state.settings = {
    leftDigits: 2,
    rightDigits: 1,
    operation: "add",
    questionCount: dailyChallengeQuestionCount,
  };
  state.questions = makeDailyChallengeQuestions(dateKey);
  state.startedAt = performance.now();
  showPanel("game");
  startQuestion();
  startTimer();
}

function showPanel(name) {
  currentPanel = name;
  document.body.classList.toggle("is-game-screen", name === "game");
  document.body.classList.remove("is-polyole-complete");
  window.scrollTo(0, 0);
  els.gameSelectPanel.classList.toggle("is-hidden", name !== "select");
  els.setupPanel.classList.toggle("is-hidden", name !== "setup");
  els.gamePanel.classList.toggle("is-hidden", name !== "game");
  els.resultPanel.classList.toggle("is-hidden", name !== "result");
  els.polyominoPanel.classList.toggle("is-hidden", name !== "polyomino");
  els.miniStats.classList.toggle("is-hidden", name === "select");
  updateTagline();
  updateFooterBackLink();
}

function updateTagline() {
  if (!els.tagline) {
    return;
  }

  els.tagline.textContent = currentPanel === "select" ? t("siteTagline") : t("tagline");
}

function setMentalGameInfoVisible(isVisible) {
  els.mentalGameInfoPanels.forEach((panel) => {
    panel.classList.toggle("is-hidden", !isVisible);
  });
}

function setPolyoleGameInfoVisible(isVisible) {
  els.polyoleGameInfoPanels.forEach((panel) => {
    panel.classList.toggle("is-hidden", !isVisible);
  });
}

function setHomeInfoVisible(isVisible) {
  els.homeInfoPanels.forEach((panel) => {
    panel.classList.toggle("is-hidden", !isVisible);
  });
}

function startTimer() {
  stopTimer();
  timerId = window.setInterval(() => {
    const startedAt = currentPanel === "polyomino" ? polyominoState.startedAt : state.startedAt;
    els.timerText.textContent = formatDuration(performance.now() - startedAt);
  }, 100);
}

function stopTimer() {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function startQuestion() {
  state.input = "";
  state.mistakes = 0;
  state.questionStartedAt = performance.now();
  const question = state.questions[state.currentIndex];
  els.questionText.textContent = question.label;
  els.answerText.textContent = "";
  els.feedbackText.textContent = t("inputHint");
  els.feedbackText.classList.remove("is-error");
  updateProgress();
}

function updateProgress() {
  els.progressText.textContent = `${Math.min(state.currentIndex + 1, state.settings.questionCount)} / ${state.settings.questionCount}`;
}

function handleKey(value) {
  if (els.gamePanel.classList.contains("is-hidden")) {
    return;
  }

  if (value === "backspace") {
    state.input = state.input.slice(0, -1);
    renderInput();
    return;
  }

  if (value === "-" && state.input.length === 0) {
    state.input = "-";
    renderInput();
    return;
  }

  if (!/^\d$/.test(value)) {
    return;
  }

  state.input += value;
  renderInput();
  checkAnswer();
}

function renderInput() {
  els.answerText.textContent = state.input;
}

function checkAnswer() {
  const current = state.questions[state.currentIndex];
  const inputNumber = Number(state.input);

  if (inputNumber === current.answer) {
    const answeredAt = performance.now();
    state.records.push({
      label: current.label,
      answer: current.answer,
      duration: answeredAt - state.questionStartedAt,
      mistakes: state.mistakes,
    });
    state.currentIndex += 1;

    if (state.currentIndex >= state.questions.length) {
      finishGame();
      return;
    }

    startQuestion();
    return;
  }

  const expected = String(current.answer);
  const unsignedInput = state.input.replace("-", "");
  const mightStillMatch = state.input === "-" || expected.startsWith(unsignedInput);
  if (state.input.length >= expected.length || !mightStillMatch) {
    state.mistakes += 1;
    els.feedbackText.textContent = t("wrong");
    els.feedbackText.classList.add("is-error");
  } else {
    els.feedbackText.textContent = t("inputHint");
    els.feedbackText.classList.remove("is-error");
  }
}

function finishGame() {
  stopTimer();
  state.totalTime = performance.now() - state.startedAt;
  state.averageTime =
    state.records.length === 0
      ? 0
      : state.records.reduce((sum, record) => sum + record.duration, 0) / state.records.length;

  els.timerText.textContent = formatDuration(state.totalTime);
  els.progressText.textContent = `${state.settings.questionCount} / ${state.settings.questionCount}`;
  refreshResultStats();
  renderHistory();
  saveRecord();
  showPanel("result");
}

function refreshResultStats() {
  els.questionTotalStat.textContent = formatQuestionCount(state.settings.questionCount);
  els.totalTimeStat.textContent = formatDuration(state.totalTime);
  els.averageTimeStat.textContent = formatSeconds(state.averageTime / 1000);
}

function renderHistory() {
  els.historyBody.innerHTML = state.records
    .map(
      (record) => `
        <tr>
          <td>${record.label}</td>
          <td>${record.answer}</td>
          <td>${formatSeconds(record.duration / 1000)}</td>
          <td>${record.mistakes}</td>
        </tr>
      `
    )
    .join("");
}

function getStoredRecords() {
  try {
    return JSON.parse(localStorage.getItem(recordStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveStoredRecords(records) {
  localStorage.setItem(recordStorageKey, JSON.stringify(records.slice(0, 10)));
}

function saveRecord() {
  const records = getStoredRecords();
  records.unshift({
    totalTime: state.totalTime,
    averageTime: state.averageTime,
    questionCount: state.settings.questionCount,
    operation: state.settings.operation,
    leftDigits: state.settings.leftDigits,
    rightDigits: state.settings.rightDigits,
    isDaily: state.isDaily,
    dailyDate: state.dailyDate,
    date: new Date().toISOString(),
  });
  saveStoredRecords(records);
  renderStoredRecords();
}

function clearStoredRecords() {
  localStorage.removeItem(recordStorageKey);
  renderStoredRecords();
}

function getPolyoleRecords() {
  try {
    return JSON.parse(localStorage.getItem(polyoleRecordStorageKey)) || [];
  } catch {
    return [];
  }
}

function savePolyoleRecords(records) {
  localStorage.setItem(polyoleRecordStorageKey, JSON.stringify(records.slice(0, 10)));
}

function savePolyoleRecord() {
  const records = getPolyoleRecords();
  records.unshift({
    size: polyominoState.size,
    pieceCount: polyominoState.pieces.length,
    totalTime: polyominoState.totalTime,
    isDaily: polyominoState.isDaily,
    dailyDate: polyominoState.dailyDate,
    date: new Date().toISOString(),
  });
  savePolyoleRecords(records);
  renderPolyoleRecords();
}

function clearPolyoleRecords() {
  localStorage.removeItem(polyoleRecordStorageKey);
  renderPolyoleRecords();
}

function renderStoredRecords() {
  const records = getStoredRecords();
  if (records.length === 0) {
    els.recordSummary.textContent = t("noRecords");
    els.recordList.innerHTML = "";
    return;
  }

  const best = records.reduce((fastest, record) => (record.totalTime < fastest.totalTime ? record : fastest), records[0]);
  els.recordSummary.textContent = `${t("bestRecord")}: ${formatDuration(best.totalTime)} / ${formatQuestionCount(best.questionCount)}`;
  els.recordList.innerHTML = records
    .slice(0, 5)
    .map((record) => {
      const date = new Date(record.date);
      const dateLabel = Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString(currentLanguage);
      const recordLabel = record.isDaily ? t("dailyChallengeRecord") : getOperationLabel(record.operation);
      return `
        <li>
          <span>${dateLabel} ${recordLabel}</span>
          <strong>${formatDuration(record.totalTime)}</strong>
          <small>${formatQuestionCount(record.questionCount)} / ${formatSeconds(record.averageTime / 1000)}</small>
        </li>
      `;
    })
    .join("");
}

function renderPolyoleRecords() {
  const records = getPolyoleRecords();
  if (!els.polyoleRecordSummary || !els.polyoleRecordList) {
    return;
  }

  if (records.length === 0) {
    els.polyoleRecordSummary.textContent = t("noRecords");
    els.polyoleRecordList.innerHTML = "";
    return;
  }

  const best = records.reduce((fastest, record) => (record.totalTime < fastest.totalTime ? record : fastest), records[0]);
  els.polyoleRecordSummary.textContent = `${t("bestRecord")}: ${formatDuration(best.totalTime)} / ${best.size} x ${best.size}`;
  els.polyoleRecordList.innerHTML = records
    .slice(0, 5)
    .map((record) => {
      const date = new Date(record.date);
      const dateLabel = Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString(currentLanguage);
      const recordLabel = record.isDaily ? t("dailyChallengeRecord") : `${record.size} x ${record.size}`;
      return `
        <li>
          <span>${dateLabel} ${recordLabel}</span>
          <strong>${formatDuration(record.totalTime)}</strong>
          <small>${record.pieceCount} ${t("pieceUnit")}</small>
        </li>
      `;
    })
    .join("");
}

function formatDuration(ms) {
  const totalTenths = Math.floor(ms / 100);
  const minutes = Math.floor(totalTenths / 600);
  const seconds = Math.floor((totalTenths % 600) / 10);
  const tenths = totalTenths % 10;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

function getShareUrl() {
  return languageUrls[currentLanguage] ? new URL(languageUrls[currentLanguage], window.location.origin).href : window.location.origin;
}

function openFallbackShare(text, url) {
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(shareUrl, "_blank", "noopener,noreferrer");
}

async function shareResult(text) {
  const url = getShareUrl();
  const title = "Mentalc";

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  openFallbackShare(text, url);
}

function shareMentalcResult() {
  const text = t("shareMentalcText")
    .replace("{questions}", formatQuestionCount(state.settings.questionCount))
    .replace("{time}", formatDuration(state.totalTime));
  shareResult(`${text} #Mentalc`);
}

function sharePolyoleResult() {
  const text = t("sharePolyoleText")
    .replace("{size}", `${polyominoState.size} x ${polyominoState.size}`)
    .replace("{time}", formatDuration(polyominoState.totalTime));
  shareResult(`${text} #Mentalc #Polyole`);
}

function resetToSetup() {
  stopTimer();
  state = createInitialState();
  showPanel("setup");
  setMentalGameInfoVisible(true);
  setPolyoleGameInfoVisible(false);
  setHomeInfoVisible(false);
  syncSettingLabels();
  syncQuestionCount(els.questionCount.value);
  els.timerText.textContent = "00:00.0";
}

function openMentalMath() {
  resetToSetup();
  els.setupPanel.scrollIntoView({ block: "start" });
}

function resetToGameSelect() {
  stopTimer();
  state = createInitialState();
  showPanel("select");
  setMentalGameInfoVisible(false);
  setPolyoleGameInfoVisible(false);
  setHomeInfoVisible(true);
  syncSettingLabels();
  syncQuestionCount(els.questionCount.value);
  els.timerText.textContent = "00:00.0";
}

function syncPolyominoSize(value) {
  const size = clamp(Number(value) || 5, 3, 8);
  els.polyominoSizeInput.value = size;
  els.polyominoSizeSlider.value = size;
  polyominoState.size = size;
  return size;
}

function openPolyomino() {
  stopTimer();
  state = createInitialState();
  setMentalGameInfoVisible(false);
  setPolyoleGameInfoVisible(true);
  setHomeInfoVisible(false);
  showPanel("polyomino");
  syncPolyominoSize(els.polyominoSizeInput.value);
  preparePolyominoSetup();
}

function preparePolyominoSetup() {
  stopTimer();
  const size = syncPolyominoSize(els.polyominoSizeInput.value);
  polyominoState = createPolyominoState();
  polyominoState.size = size;
  els.timerText.textContent = "00:00.0";
  els.progressText.textContent = "0 / 0";
  els.polyominoStatus.textContent = t("polyominoReady");
  els.polyominoBoard.innerHTML = "";
  els.polyominoPieces.innerHTML = "";
  els.polyominoPlay.classList.add("is-hidden");
  els.polyoleResult.classList.add("is-hidden");
  els.polyominoPanel.classList.remove("is-complete");
  els.polyominoStartButton.disabled = false;
  els.polyominoRotateButton.disabled = true;
  els.polyominoUndoButton.disabled = true;
  els.polyominoResetButton.disabled = true;
  document.body.classList.remove("is-game-screen");
  document.body.classList.remove("is-polyole-complete");
}

function createPolyominoPuzzle() {
  const size = syncPolyominoSize(els.polyominoSizeInput.value);
  startPolyominoPuzzle(size, createPolyominoPieces(size), false, "");
}

function startDailyPolyominoChallenge() {
  const dateKey = getDailyDateKey();
  const size = 5;
  syncPolyominoSize(size);
  startPolyominoPuzzle(size, createPolyominoPieces(size, createSeededRandom(`polyole-daily-${dateKey}`)), true, dateKey);
}

function startPolyominoPuzzle(size, pieces, isDaily, dailyDate) {
  polyominoState = createPolyominoState();
  polyominoState.size = size;
  polyominoState.isDaily = isDaily;
  polyominoState.dailyDate = dailyDate;
  polyominoState.isStarted = true;
  polyominoState.startedAt = performance.now();
  polyominoState.board = Array.from({ length: size }, () => Array(size).fill(null));
  polyominoState.pieces = pieces;
  polyominoState.selectedId = polyominoState.pieces[0]?.id ?? null;
  els.timerText.textContent = "00:00.0";
  els.progressText.textContent = `0 / ${polyominoState.pieces.length}`;
  els.polyominoPlay.classList.remove("is-hidden");
  els.polyoleResult.classList.add("is-hidden");
  els.polyominoPanel.classList.remove("is-complete");
  els.polyominoStartButton.disabled = true;
  els.polyominoRotateButton.disabled = false;
  els.polyominoUndoButton.disabled = false;
  els.polyominoResetButton.disabled = false;
  document.body.classList.add("is-game-screen");
  document.body.classList.remove("is-polyole-complete");
  renderPolyomino();
  startTimer();
}

function createPolyominoPieces(size, random = Math.random) {
  const unused = new Set();
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      unused.add(`${row},${col}`);
    }
  }

  const pieces = [];
  while (unused.size > 0) {
    const startKey = randomFromArray([...unused], random);
    const [startRow, startCol] = startKey.split(",").map(Number);
    const remaining = unused.size;
    const targetSize = remaining <= 5 ? remaining : seededInt(random, 3, 5);
    const cells = [{ row: startRow, col: startCol }];
    unused.delete(startKey);

    while (cells.length < targetSize) {
      const candidates = [];
      cells.forEach((cell) => {
        getNeighborCells(cell.row, cell.col, size).forEach((neighbor) => {
          const key = `${neighbor.row},${neighbor.col}`;
          if (unused.has(key) && !candidates.some((candidate) => candidate.row === neighbor.row && candidate.col === neighbor.col)) {
            candidates.push(neighbor);
          }
        });
      });

      if (candidates.length === 0) {
        break;
      }

      const next = randomFromArray(candidates, random);
      unused.delete(`${next.row},${next.col}`);
      cells.push(next);
    }

    pieces.push(makePolyominoPiece(pieces.length, cells));
  }

  return pieces;
}

function makePolyominoPiece(index, cells) {
  const minRow = Math.min(...cells.map((cell) => cell.row));
  const minCol = Math.min(...cells.map((cell) => cell.col));
  return {
    id: `piece-${index}`,
    cells: cells.map((cell) => ({ row: cell.row - minRow, col: cell.col - minCol })),
    color: polyominoColors[index % polyominoColors.length],
    placed: false,
  };
}

function getNeighborCells(row, col, size) {
  return [
    { row: row - 1, col },
    { row: row + 1, col },
    { row, col: col - 1 },
    { row, col: col + 1 },
  ].filter((cell) => cell.row >= 0 && cell.row < size && cell.col >= 0 && cell.col < size);
}

function randomFromArray(items, random) {
  if (!random) {
    return items[randomInt(0, items.length - 1)];
  }

  return items[seededInt(random, 0, items.length - 1)];
}

function renderPolyomino() {
  if (!polyominoState.board.length) {
    return;
  }
  renderPolyominoBoard();
  renderPolyominoPieces();
  updatePolyominoStatus();
}

function renderPolyominoBoard() {
  const size = polyominoState.size;
  els.polyominoBoard.style.setProperty("--board-size", size);
  els.polyominoBoard.innerHTML = "";

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "polyomino-cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      const pieceId = polyominoState.board[row][col];
      if (pieceId) {
        const piece = getPolyominoPiece(pieceId);
        cell.style.background = piece.color;
        cell.classList.add("is-filled");
      }
      els.polyominoBoard.appendChild(cell);
    }
  }

  applyPolyominoPreview();
}

function renderPolyominoPieces() {
  els.polyominoPieces.innerHTML = "";
  polyominoState.pieces.forEach((piece) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "polyomino-piece";
    button.dataset.pieceId = piece.id;
    button.disabled = piece.placed;
    button.classList.toggle("is-selected", piece.id === polyominoState.selectedId);
    button.classList.toggle("is-placed", piece.placed);
    button.appendChild(createPolyominoPreview(piece, piece.id === polyominoState.selectedId ? polyominoState.rotation : 0));
    els.polyominoPieces.appendChild(button);
  });
}

function createPolyominoPreview(piece, rotation) {
  const cells = getRotatedCells(piece.cells, rotation);
  const rows = Math.max(...cells.map((cell) => cell.row)) + 1;
  const cols = Math.max(...cells.map((cell) => cell.col)) + 1;
  const preview = document.createElement("span");
  preview.className = "polyomino-preview";
  preview.style.setProperty("--piece-rows", rows);
  preview.style.setProperty("--piece-cols", cols);

  cells.forEach((cell) => {
    const block = document.createElement("span");
    block.style.gridRow = cell.row + 1;
    block.style.gridColumn = cell.col + 1;
    block.style.background = piece.color;
    preview.appendChild(block);
  });

  return preview;
}

function getPolyominoPiece(pieceId) {
  return polyominoState.pieces.find((piece) => piece.id === pieceId);
}

function getRotatedCells(cells, rotation) {
  const rotated = cells.map((cell) => {
    if (rotation === 1) return { row: cell.col, col: -cell.row };
    if (rotation === 2) return { row: -cell.row, col: -cell.col };
    if (rotation === 3) return { row: -cell.col, col: cell.row };
    return { row: cell.row, col: cell.col };
  });
  const minRow = Math.min(...rotated.map((cell) => cell.row));
  const minCol = Math.min(...rotated.map((cell) => cell.col));
  return rotated.map((cell) => ({ row: cell.row - minRow, col: cell.col - minCol }));
}

function getPolyominoPlacement(row, col) {
  const piece = getPolyominoPiece(polyominoState.selectedId);
  if (!piece || piece.placed) {
    return { cells: [], canPlace: false };
  }

  const cells = getRotatedCells(piece.cells, polyominoState.rotation).map((cell) => ({
    row: row + cell.row,
    col: col + cell.col,
  }));

  const canPlace = cells.every(
    (cell) =>
      cell.row >= 0 &&
      cell.row < polyominoState.size &&
      cell.col >= 0 &&
      cell.col < polyominoState.size &&
      polyominoState.board[cell.row][cell.col] === null
  );

  return { cells, canPlace };
}

function updatePolyominoPreview(row, col) {
  const placement = getPolyominoPlacement(row, col);
  polyominoState.preview = { row, col, ...placement };
  applyPolyominoPreview();
  els.polyominoStatus.textContent = placement.canPlace ? t("placePiece") : t("invalidPlacement");
  return placement;
}

function clearPolyominoPreview() {
  polyominoState.preview = null;
  applyPolyominoPreview();
  updatePolyominoStatus();
}

function applyPolyominoPreview() {
  els.polyominoBoard.querySelectorAll(".polyomino-cell").forEach((cell) => {
    cell.classList.remove("is-preview-valid", "is-preview-invalid");
  });

  if (!polyominoState.preview) {
    return;
  }

  const previewClass = polyominoState.preview.canPlace ? "is-preview-valid" : "is-preview-invalid";
  polyominoState.preview.cells.forEach((cell) => {
    const node = els.polyominoBoard.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
    if (node && !node.classList.contains("is-filled")) {
      node.classList.add(previewClass);
    }
  });
}

function selectPolyominoPiece(pieceId) {
  const piece = getPolyominoPiece(pieceId);
  if (!piece || piece.placed) {
    return;
  }
  const keepRotation = polyominoState.selectedId === pieceId;
  polyominoState.selectedId = pieceId;
  polyominoState.rotation = keepRotation ? polyominoState.rotation : 0;
  polyominoState.preview = null;
  renderPolyomino();
}

function startPolyominoDrag(event, pieceId) {
  const piece = getPolyominoPiece(pieceId);
  if (!piece || piece.placed || !polyominoState.isStarted) {
    return;
  }

  event.preventDefault();
  const keepRotation = polyominoState.selectedId === pieceId;
  polyominoState.selectedId = pieceId;
  polyominoState.rotation = keepRotation ? polyominoState.rotation : 0;
  polyominoState.preview = null;
  renderPolyomino();

  const ghost = document.createElement("div");
  ghost.className = "polyomino-drag-ghost";
  ghost.appendChild(createPolyominoPreview(piece, polyominoState.rotation));
  document.body.appendChild(ghost);

  polyominoDrag = { pieceId, ghost };
  movePolyominoDrag(event.clientX, event.clientY);
  window.addEventListener("pointermove", handlePolyominoDragMove);
  window.addEventListener("pointerup", endPolyominoDrag);
  window.addEventListener("pointercancel", cancelPolyominoDrag);
}

function movePolyominoDrag(x, y) {
  if (!polyominoDrag) {
    return;
  }

  polyominoDrag.ghost.style.left = `${x}px`;
  polyominoDrag.ghost.style.top = `${y}px`;

  const target = document.elementFromPoint(x, y);
  const cell = target?.closest?.("[data-row][data-col]");
  if (cell && els.polyominoBoard.contains(cell)) {
    updatePolyominoPreview(Number(cell.dataset.row), Number(cell.dataset.col));
    return;
  }

  polyominoState.preview = null;
  applyPolyominoPreview();
  els.polyominoStatus.textContent = t("placePiece");
}

function handlePolyominoDragMove(event) {
  event.preventDefault();
  movePolyominoDrag(event.clientX, event.clientY);
}

function endPolyominoDrag(event) {
  event.preventDefault();
  const preview = polyominoState.preview;
  cleanupPolyominoDrag();
  if (preview?.canPlace) {
    placePolyominoPiece(preview.row, preview.col);
    return;
  }
  clearPolyominoPreview();
}

function cancelPolyominoDrag() {
  cleanupPolyominoDrag();
  clearPolyominoPreview();
}

function cleanupPolyominoDrag() {
  window.removeEventListener("pointermove", handlePolyominoDragMove);
  window.removeEventListener("pointerup", endPolyominoDrag);
  window.removeEventListener("pointercancel", cancelPolyominoDrag);
  polyominoDrag?.ghost.remove();
  polyominoDrag = null;
}

function rotatePolyominoPiece() {
  if (!polyominoState.selectedId) {
    return;
  }
  polyominoState.rotation = (polyominoState.rotation + 1) % 4;
  renderPolyomino();
  if (polyominoState.preview) {
    updatePolyominoPreview(polyominoState.preview.row, polyominoState.preview.col);
  }
}

function placePolyominoPiece(row, col) {
  const piece = getPolyominoPiece(polyominoState.selectedId);
  if (!piece || piece.placed) {
    els.polyominoStatus.textContent = t("selectPiece");
    return;
  }

  const placement = getPolyominoPlacement(row, col);
  if (!placement.canPlace) {
    els.polyominoStatus.textContent = t("invalidPlacement");
    return;
  }

  placement.cells.forEach((cell) => {
    polyominoState.board[cell.row][cell.col] = piece.id;
  });
  piece.placed = true;
  polyominoState.moves.push(piece.id);
  polyominoState.selectedId = polyominoState.pieces.find((candidate) => !candidate.placed)?.id ?? null;
  polyominoState.rotation = 0;
  polyominoState.preview = null;
  renderPolyomino();
}

function undoPolyominoMove() {
  const pieceId = polyominoState.moves.pop();
  if (!pieceId) {
    return;
  }

  polyominoState.board.forEach((row) => {
    row.forEach((piece, index) => {
      if (piece === pieceId) {
        row[index] = null;
      }
    });
  });

  const piece = getPolyominoPiece(pieceId);
  if (piece) {
    piece.placed = false;
    polyominoState.selectedId = piece.id;
    polyominoState.rotation = 0;
  }
  polyominoState.preview = null;
  renderPolyomino();
}

function resetPolyominoPuzzle() {
  if (!polyominoState.isStarted || polyominoState.pieces.length === 0) {
    preparePolyominoSetup();
    return;
  }
  const size = polyominoState.size;
  polyominoState.board = Array.from({ length: size }, () => Array(size).fill(null));
  polyominoState.pieces.forEach((piece) => {
    piece.placed = false;
  });
  polyominoState.moves = [];
  polyominoState.selectedId = polyominoState.pieces[0]?.id ?? null;
  polyominoState.rotation = 0;
  polyominoState.preview = null;
  polyominoState.startedAt = performance.now();
  polyominoState.totalTime = 0;
  els.timerText.textContent = "00:00.0";
  els.polyoleResult.classList.add("is-hidden");
  els.polyominoPanel.classList.remove("is-complete");
  document.body.classList.remove("is-polyole-complete");
  renderPolyomino();
  startTimer();
}

function updatePolyominoStatus() {
  if (polyominoState.pieces.length > 0 && polyominoState.pieces.every((piece) => piece.placed)) {
    if (polyominoState.totalTime > 0) {
      els.polyominoStatus.textContent = t("puzzleComplete");
      return;
    }
    stopTimer();
    polyominoState.totalTime = performance.now() - polyominoState.startedAt;
    els.timerText.textContent = formatDuration(polyominoState.totalTime);
    els.progressText.textContent = `${polyominoState.pieces.length} / ${polyominoState.pieces.length}`;
    els.polyominoStatus.textContent = t("puzzleComplete");
    showPolyoleResult();
    savePolyoleRecord();
    return;
  }
  const placedCount = polyominoState.pieces.filter((piece) => piece.placed).length;
  els.progressText.textContent = `${placedCount} / ${polyominoState.pieces.length}`;
  els.polyominoStatus.textContent = polyominoState.selectedId ? t("placePiece") : t("selectPiece");
}

function showPolyoleResult() {
  els.polyoleResultSize.textContent = `${polyominoState.size} x ${polyominoState.size}`;
  els.polyoleResultTime.textContent = formatDuration(polyominoState.totalTime);
  els.polyominoPanel.classList.add("is-complete");
  document.body.classList.add("is-polyole-complete");
  els.polyoleResult.classList.remove("is-hidden");
}

function handleFooterBack(event) {
  event.preventDefault();

  if (currentPanel === "select") {
    els.gameSelectPanel.scrollIntoView({ block: "start" });
    return;
  }

  if (currentPanel === "polyomino") {
    resetToGameSelect();
    els.gameSelectPanel.scrollIntoView({ block: "start" });
    return;
  }

  resetToSetup();
  els.setupPanel.scrollIntoView({ block: "start" });
}

document.querySelectorAll("[data-key]").forEach((button) => {
  button.addEventListener("click", () => handleKey(button.dataset.key));
});

window.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    handleKey(event.key);
  }

  if (event.key === "Backspace") {
    handleKey("backspace");
  }

  if (event.key === "-") {
    handleKey("-");
  }
});

[els.leftDigits, els.rightDigits, els.operation].forEach((input) => {
  input.addEventListener("input", syncSettingLabels);
});

els.languageSelect.addEventListener("change", () => handleLanguageChange(els.languageSelect.value));
els.questionCount.addEventListener("focus", () => els.questionCount.select());
els.questionCount.addEventListener("input", () => syncQuestionCount(els.questionCount.value));
els.questionCountSlider.addEventListener("input", () => syncQuestionCount(els.questionCountSlider.value));
els.openMentalMathButton.addEventListener("click", openMentalMath);
els.openPolyominoButton.addEventListener("click", openPolyomino);
els.startButton.addEventListener("click", startGame);
els.dailyChallengeButton.addEventListener("click", startDailyChallenge);
els.backToGamesButton.addEventListener("click", resetToGameSelect);
els.polyominoBackButton.addEventListener("click", resetToGameSelect);
els.polyominoNewButton.addEventListener("click", createPolyominoPuzzle);
els.polyominoDailyButton.addEventListener("click", startDailyPolyominoChallenge);
els.polyominoStartButton.addEventListener("click", createPolyominoPuzzle);
els.polyominoRotateButton.addEventListener("click", rotatePolyominoPiece);
els.polyominoUndoButton.addEventListener("click", undoPolyominoMove);
els.polyominoResetButton.addEventListener("click", resetPolyominoPuzzle);
els.polyominoSizeInput.addEventListener("input", () => {
  syncPolyominoSize(els.polyominoSizeInput.value);
  preparePolyominoSetup();
});
els.polyominoSizeSlider.addEventListener("input", () => {
  syncPolyominoSize(els.polyominoSizeSlider.value);
  preparePolyominoSetup();
});
els.polyominoPieces.addEventListener("click", (event) => {
  const button = event.target.closest("[data-piece-id]");
  if (button) {
    selectPolyominoPiece(button.dataset.pieceId);
  }
});
els.polyominoPieces.addEventListener("pointerdown", (event) => {
  const button = event.target.closest("[data-piece-id]");
  if (button) {
    startPolyominoDrag(event, button.dataset.pieceId);
  }
});
els.polyominoBoard.addEventListener("click", (event) => {
  const cell = event.target.closest("[data-row][data-col]");
  if (cell) {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const previousPreview = polyominoState.preview;
    const placement = updatePolyominoPreview(row, col);
    const isSamePreview = previousPreview && previousPreview.row === row && previousPreview.col === col;
    if (isSamePreview && placement.canPlace) {
      placePolyominoPiece(row, col);
    }
  }
});
els.polyominoBoard.addEventListener("mouseover", (event) => {
  const cell = event.target.closest("[data-row][data-col]");
  if (cell) {
    updatePolyominoPreview(Number(cell.dataset.row), Number(cell.dataset.col));
  }
});
els.polyominoBoard.addEventListener("mouseleave", clearPolyominoPreview);
els.resetButton.addEventListener("click", resetToSetup);
els.retryButton.addEventListener("click", () => {
  if (state.isDaily) {
    startDailyChallenge();
    return;
  }

  startGame();
});
els.backToSetupButton.addEventListener("click", resetToSetup);
els.shareMentalcButton.addEventListener("click", shareMentalcResult);
els.sharePolyoleButton.addEventListener("click", sharePolyoleResult);
els.clearRecordsButton.addEventListener("click", clearStoredRecords);
els.clearPolyoleRecordsButton.addEventListener("click", clearPolyoleRecords);
els.footerBackLink.addEventListener("click", handleFooterBack);

applyLanguage(getInitialLanguage());
resetToGameSelect();
initAdsense();
