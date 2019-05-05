class Token {
  constructor(type, literal, lineNumber) {
    this._type = type;
    this._literal = literal;
    this._lineNumber = lineNumber;
  }

  get type() {
    return this._type;
  }

  get literal() {
    return this._literal;
  }

  get lineNumber() {
    return this._lineNumber;
  }
}

export default class Lexer {
  constructor(sourceCode) {
    this.sourceCode = sourceCode;
    this._initSymbol();
    this.ch = "";
    this.position = 0;
  }

  // Private
  _initSymbol() {
    this.EOF = -1;
    this.LET = 0;
    this.IDENTIFER = 1;
    this.EQUAL_SIGN = 2;
    this.PLUS_SIGN = 3;
    this.NUMBER = 4;
    this.SEMICOLON = 5;
  }

  // 每次读一个字符，用于合成，需要位置标记
  readChar() {
    this.ch = this.sourceCode[this.position];
    this.position += 1;
  }

  // 忽略空格和回车，' ' \n \t, 记录行号
  skipIgnoreSymbol() {}

  // 每调用一次构造一个 token,
  nextToken() {}

  // Public
  lexing() {
    this.readCh();

    let tokens = [];
    for (
      let token = this.nextToken();
      token.type !== this.EOF;
      token = this.nextToken()
    ) {
      tokens.push(token);
    }
    console.log(tokens);
  }
}
