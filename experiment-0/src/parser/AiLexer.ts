// Generated from AiLexer.g4 by ANTLR 4.11.2-SNAPSHOT
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class AiLexer extends Lexer {
	public static readonly LPAR = 1;
	public static readonly RPAR = 2;
	public static readonly LBRAK = 3;
	public static readonly RBRAK = 4;
	public static readonly LCURL = 5;
	public static readonly RCURL = 6;
	public static readonly DOT = 7;
	public static readonly COMMA = 8;
	public static readonly COLON = 9;
	public static readonly SEMI = 10;
	public static readonly ASSIGN = 11;
	public static readonly VAR = 12;
	public static readonly FUNCTION = 13;
	public static readonly INTEGER_LITERAL = 14;
	public static readonly DECIMAL_LITERAL = 15;
	public static readonly BOOLEAN_LITERAL = 16;
	public static readonly CHAR_LITERAL = 17;
	public static readonly STRING_LITERAL = 18;
	public static readonly NULL_LITERAL = 19;
	public static readonly PASCAL_CASE_IDENTIFIER = 20;
	public static readonly CAMEL_CASE_IDENTIFIER = 21;
	public static readonly ANY_IDENTIFIER = 22;
	public static readonly WS = 23;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'('", "')'", "'['", 
                                                   "']'", "'{'", "'}'", 
                                                   "'.'", "','", "':'", 
                                                   "';'", "'='", "'var'", 
                                                   "'function'", null, null, 
                                                   null, null, null, "'null'" ];
	public static readonly symbolicNames: string[] = [ null, "LPAR", "RPAR", 
                                                    "LBRAK", "RBRAK", "LCURL", 
                                                    "RCURL", "DOT", "COMMA", 
                                                    "COLON", "SEMI", "ASSIGN", 
                                                    "VAR", "FUNCTION", "INTEGER_LITERAL", 
                                                    "DECIMAL_LITERAL", "BOOLEAN_LITERAL", 
                                                    "CHAR_LITERAL", "STRING_LITERAL", 
                                                    "NULL_LITERAL", "PASCAL_CASE_IDENTIFIER", 
                                                    "CAMEL_CASE_IDENTIFIER", 
                                                    "ANY_IDENTIFIER", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"LPAR", "RPAR", "LBRAK", "RBRAK", "LCURL", "RCURL", "DOT", "COMMA", "COLON", 
		"SEMI", "ASSIGN", "VAR", "FUNCTION", "INTEGER_LITERAL", "DecimalIntegerLiteral", 
		"HexIntegerLiteral", "OctalIntegerLiteral", "BinaryIntegerLiteral", "IntegerTypeSuffix", 
		"DecimalNumeral", "Digits", "Digit", "NonZeroDigit", "DigitsAndUnderscores", 
		"DigitOrUnderscore", "Underscores", "HexNumeral", "HexDigits", "HexDigit", 
		"HexDigitsAndUnderscores", "HexDigitOrUnderscore", "OctalNumeral", "OctalDigits", 
		"OctalDigit", "OctalDigitsAndUnderscores", "OctalDigitOrUnderscore", "BinaryNumeral", 
		"BinaryDigits", "BinaryDigit", "BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore", 
		"DECIMAL_LITERAL", "DecimalFloatingPointLiteral", "ExponentPart", "ExponentIndicator", 
		"SignedInteger", "Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", 
		"HexSignificand", "BinaryExponent", "BinaryExponentIndicator", "BOOLEAN_LITERAL", 
		"CHAR_LITERAL", "SingleCharacter", "STRING_LITERAL", "StringCharacters", 
		"StringCharacter", "EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape", 
		"NULL_LITERAL", "PASCAL_CASE_IDENTIFIER", "CAMEL_CASE_IDENTIFIER", "ANY_IDENTIFIER", 
		"Letter", "LetterOrDigit", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, AiLexer._ATN, AiLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "AiLexer.g4"; }

	public get literalNames(): (string | null)[] { return AiLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return AiLexer.symbolicNames; }
	public get ruleNames(): string[] { return AiLexer.ruleNames; }

	public get serializedATN(): number[] { return AiLexer._serializedATN; }

	public get channelNames(): string[] { return AiLexer.channelNames; }

	public get modeNames(): string[] { return AiLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,23,482,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
	2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,
	60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,
	7,67,2,68,7,68,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
	1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,179,8,13,1,14,1,14,
	3,14,183,8,14,1,15,1,15,3,15,187,8,15,1,16,1,16,3,16,191,8,16,1,17,1,17,
	3,17,195,8,17,1,18,1,18,1,19,1,19,1,19,3,19,202,8,19,1,19,1,19,1,19,3,19,
	207,8,19,3,19,209,8,19,1,20,1,20,3,20,213,8,20,1,20,3,20,216,8,20,1,21,
	1,21,3,21,220,8,21,1,22,1,22,1,23,4,23,225,8,23,11,23,12,23,226,1,24,1,
	24,3,24,231,8,24,1,25,4,25,234,8,25,11,25,12,25,235,1,26,1,26,1,26,1,26,
	1,27,1,27,3,27,244,8,27,1,27,3,27,247,8,27,1,28,1,28,1,29,4,29,252,8,29,
	11,29,12,29,253,1,30,1,30,3,30,258,8,30,1,31,1,31,3,31,262,8,31,1,31,1,
	31,1,32,1,32,3,32,268,8,32,1,32,3,32,271,8,32,1,33,1,33,1,34,4,34,276,8,
	34,11,34,12,34,277,1,35,1,35,3,35,282,8,35,1,36,1,36,1,36,1,36,1,37,1,37,
	3,37,290,8,37,1,37,3,37,293,8,37,1,38,1,38,1,39,4,39,298,8,39,11,39,12,
	39,299,1,40,1,40,3,40,304,8,40,1,41,1,41,3,41,308,8,41,1,42,1,42,1,42,3,
	42,313,8,42,1,42,3,42,316,8,42,1,42,3,42,319,8,42,1,42,1,42,1,42,3,42,324,
	8,42,1,42,3,42,327,8,42,1,42,1,42,1,42,3,42,332,8,42,1,42,1,42,1,42,3,42,
	337,8,42,1,43,1,43,1,43,1,44,1,44,1,45,3,45,345,8,45,1,45,1,45,1,46,1,46,
	1,47,1,47,1,48,1,48,1,48,3,48,356,8,48,1,49,1,49,3,49,360,8,49,1,49,1,49,
	1,49,3,49,365,8,49,1,49,1,49,3,49,369,8,49,1,50,1,50,1,50,1,51,1,51,1,52,
	1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,385,8,52,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,3,53,395,8,53,1,54,1,54,1,55,1,55,3,55,401,8,55,
	1,55,1,55,1,56,4,56,406,8,56,11,56,12,56,407,1,57,1,57,3,57,412,8,57,1,
	58,1,58,1,58,1,58,3,58,418,8,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,3,59,431,8,59,1,60,1,60,1,61,1,61,4,61,437,8,61,11,61,12,
	61,438,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,63,1,63,5,63,
	453,8,63,10,63,12,63,456,9,63,1,64,1,64,5,64,460,8,64,10,64,12,64,463,9,
	64,1,65,1,65,5,65,467,8,65,10,65,12,65,470,9,65,1,66,1,66,1,67,1,67,1,68,
	4,68,477,8,68,11,68,12,68,478,1,68,1,68,0,0,69,1,1,3,2,5,3,7,4,9,5,11,6,
	13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,0,31,0,33,0,35,0,37,0,39,
	0,41,0,43,0,45,0,47,0,49,0,51,0,53,0,55,0,57,0,59,0,61,0,63,0,65,0,67,0,
	69,0,71,0,73,0,75,0,77,0,79,0,81,0,83,15,85,0,87,0,89,0,91,0,93,0,95,0,
	97,0,99,0,101,0,103,0,105,16,107,17,109,0,111,18,113,0,115,0,117,0,119,
	0,121,0,123,0,125,19,127,20,129,21,131,22,133,0,135,0,137,23,1,0,20,2,0,
	76,76,108,108,1,0,49,57,2,0,88,88,120,120,3,0,48,57,65,70,97,102,1,0,48,
	55,2,0,66,66,98,98,1,0,48,49,2,0,69,69,101,101,2,0,43,43,45,45,4,0,68,68,
	70,70,100,100,102,102,2,0,80,80,112,112,4,0,10,10,13,13,39,39,92,92,4,0,
	10,10,13,13,34,34,92,92,8,0,34,34,39,39,92,92,98,98,102,102,110,110,114,
	114,116,116,1,0,48,51,1,0,65,90,1,0,97,122,4,0,36,36,65,90,95,95,97,122,
	5,0,36,36,48,57,65,90,95,95,97,122,3,0,9,10,12,13,32,32,493,0,1,1,0,0,0,
	0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
	1,0,0,0,0,27,1,0,0,0,0,83,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,111,1,0,
	0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,137,1,0,0,
	0,1,139,1,0,0,0,3,141,1,0,0,0,5,143,1,0,0,0,7,145,1,0,0,0,9,147,1,0,0,0,
	11,149,1,0,0,0,13,151,1,0,0,0,15,153,1,0,0,0,17,155,1,0,0,0,19,157,1,0,
	0,0,21,159,1,0,0,0,23,161,1,0,0,0,25,165,1,0,0,0,27,178,1,0,0,0,29,180,
	1,0,0,0,31,184,1,0,0,0,33,188,1,0,0,0,35,192,1,0,0,0,37,196,1,0,0,0,39,
	208,1,0,0,0,41,210,1,0,0,0,43,219,1,0,0,0,45,221,1,0,0,0,47,224,1,0,0,0,
	49,230,1,0,0,0,51,233,1,0,0,0,53,237,1,0,0,0,55,241,1,0,0,0,57,248,1,0,
	0,0,59,251,1,0,0,0,61,257,1,0,0,0,63,259,1,0,0,0,65,265,1,0,0,0,67,272,
	1,0,0,0,69,275,1,0,0,0,71,281,1,0,0,0,73,283,1,0,0,0,75,287,1,0,0,0,77,
	294,1,0,0,0,79,297,1,0,0,0,81,303,1,0,0,0,83,307,1,0,0,0,85,336,1,0,0,0,
	87,338,1,0,0,0,89,341,1,0,0,0,91,344,1,0,0,0,93,348,1,0,0,0,95,350,1,0,
	0,0,97,352,1,0,0,0,99,368,1,0,0,0,101,370,1,0,0,0,103,373,1,0,0,0,105,384,
	1,0,0,0,107,394,1,0,0,0,109,396,1,0,0,0,111,398,1,0,0,0,113,405,1,0,0,0,
	115,411,1,0,0,0,117,417,1,0,0,0,119,430,1,0,0,0,121,432,1,0,0,0,123,434,
	1,0,0,0,125,445,1,0,0,0,127,450,1,0,0,0,129,457,1,0,0,0,131,464,1,0,0,0,
	133,471,1,0,0,0,135,473,1,0,0,0,137,476,1,0,0,0,139,140,5,40,0,0,140,2,
	1,0,0,0,141,142,5,41,0,0,142,4,1,0,0,0,143,144,5,91,0,0,144,6,1,0,0,0,145,
	146,5,93,0,0,146,8,1,0,0,0,147,148,5,123,0,0,148,10,1,0,0,0,149,150,5,125,
	0,0,150,12,1,0,0,0,151,152,5,46,0,0,152,14,1,0,0,0,153,154,5,44,0,0,154,
	16,1,0,0,0,155,156,5,58,0,0,156,18,1,0,0,0,157,158,5,59,0,0,158,20,1,0,
	0,0,159,160,5,61,0,0,160,22,1,0,0,0,161,162,5,118,0,0,162,163,5,97,0,0,
	163,164,5,114,0,0,164,24,1,0,0,0,165,166,5,102,0,0,166,167,5,117,0,0,167,
	168,5,110,0,0,168,169,5,99,0,0,169,170,5,116,0,0,170,171,5,105,0,0,171,
	172,5,111,0,0,172,173,5,110,0,0,173,26,1,0,0,0,174,179,3,29,14,0,175,179,
	3,31,15,0,176,179,3,33,16,0,177,179,3,35,17,0,178,174,1,0,0,0,178,175,1,
	0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,28,1,0,0,0,180,182,3,39,19,0,
	181,183,3,37,18,0,182,181,1,0,0,0,182,183,1,0,0,0,183,30,1,0,0,0,184,186,
	3,53,26,0,185,187,3,37,18,0,186,185,1,0,0,0,186,187,1,0,0,0,187,32,1,0,
	0,0,188,190,3,63,31,0,189,191,3,37,18,0,190,189,1,0,0,0,190,191,1,0,0,0,
	191,34,1,0,0,0,192,194,3,73,36,0,193,195,3,37,18,0,194,193,1,0,0,0,194,
	195,1,0,0,0,195,36,1,0,0,0,196,197,7,0,0,0,197,38,1,0,0,0,198,209,5,48,
	0,0,199,206,3,45,22,0,200,202,3,41,20,0,201,200,1,0,0,0,201,202,1,0,0,0,
	202,207,1,0,0,0,203,204,3,51,25,0,204,205,3,41,20,0,205,207,1,0,0,0,206,
	201,1,0,0,0,206,203,1,0,0,0,207,209,1,0,0,0,208,198,1,0,0,0,208,199,1,0,
	0,0,209,40,1,0,0,0,210,215,3,43,21,0,211,213,3,47,23,0,212,211,1,0,0,0,
	212,213,1,0,0,0,213,214,1,0,0,0,214,216,3,43,21,0,215,212,1,0,0,0,215,216,
	1,0,0,0,216,42,1,0,0,0,217,220,5,48,0,0,218,220,3,45,22,0,219,217,1,0,0,
	0,219,218,1,0,0,0,220,44,1,0,0,0,221,222,7,1,0,0,222,46,1,0,0,0,223,225,
	3,49,24,0,224,223,1,0,0,0,225,226,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,
	0,227,48,1,0,0,0,228,231,3,43,21,0,229,231,5,95,0,0,230,228,1,0,0,0,230,
	229,1,0,0,0,231,50,1,0,0,0,232,234,5,95,0,0,233,232,1,0,0,0,234,235,1,0,
	0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,52,1,0,0,0,237,238,5,48,0,0,238,
	239,7,2,0,0,239,240,3,55,27,0,240,54,1,0,0,0,241,246,3,57,28,0,242,244,
	3,59,29,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,247,3,57,
	28,0,246,243,1,0,0,0,246,247,1,0,0,0,247,56,1,0,0,0,248,249,7,3,0,0,249,
	58,1,0,0,0,250,252,3,61,30,0,251,250,1,0,0,0,252,253,1,0,0,0,253,251,1,
	0,0,0,253,254,1,0,0,0,254,60,1,0,0,0,255,258,3,57,28,0,256,258,5,95,0,0,
	257,255,1,0,0,0,257,256,1,0,0,0,258,62,1,0,0,0,259,261,5,48,0,0,260,262,
	3,51,25,0,261,260,1,0,0,0,261,262,1,0,0,0,262,263,1,0,0,0,263,264,3,65,
	32,0,264,64,1,0,0,0,265,270,3,67,33,0,266,268,3,69,34,0,267,266,1,0,0,0,
	267,268,1,0,0,0,268,269,1,0,0,0,269,271,3,67,33,0,270,267,1,0,0,0,270,271,
	1,0,0,0,271,66,1,0,0,0,272,273,7,4,0,0,273,68,1,0,0,0,274,276,3,71,35,0,
	275,274,1,0,0,0,276,277,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,70,
	1,0,0,0,279,282,3,67,33,0,280,282,5,95,0,0,281,279,1,0,0,0,281,280,1,0,
	0,0,282,72,1,0,0,0,283,284,5,48,0,0,284,285,7,5,0,0,285,286,3,75,37,0,286,
	74,1,0,0,0,287,292,3,77,38,0,288,290,3,79,39,0,289,288,1,0,0,0,289,290,
	1,0,0,0,290,291,1,0,0,0,291,293,3,77,38,0,292,289,1,0,0,0,292,293,1,0,0,
	0,293,76,1,0,0,0,294,295,7,6,0,0,295,78,1,0,0,0,296,298,3,81,40,0,297,296,
	1,0,0,0,298,299,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,80,1,0,0,0,
	301,304,3,77,38,0,302,304,5,95,0,0,303,301,1,0,0,0,303,302,1,0,0,0,304,
	82,1,0,0,0,305,308,3,85,42,0,306,308,3,97,48,0,307,305,1,0,0,0,307,306,
	1,0,0,0,308,84,1,0,0,0,309,310,3,41,20,0,310,312,5,46,0,0,311,313,3,41,
	20,0,312,311,1,0,0,0,312,313,1,0,0,0,313,315,1,0,0,0,314,316,3,87,43,0,
	315,314,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,319,3,95,47,0,318,317,
	1,0,0,0,318,319,1,0,0,0,319,337,1,0,0,0,320,321,5,46,0,0,321,323,3,41,20,
	0,322,324,3,87,43,0,323,322,1,0,0,0,323,324,1,0,0,0,324,326,1,0,0,0,325,
	327,3,95,47,0,326,325,1,0,0,0,326,327,1,0,0,0,327,337,1,0,0,0,328,329,3,
	41,20,0,329,331,3,87,43,0,330,332,3,95,47,0,331,330,1,0,0,0,331,332,1,0,
	0,0,332,337,1,0,0,0,333,334,3,41,20,0,334,335,3,95,47,0,335,337,1,0,0,0,
	336,309,1,0,0,0,336,320,1,0,0,0,336,328,1,0,0,0,336,333,1,0,0,0,337,86,
	1,0,0,0,338,339,3,89,44,0,339,340,3,91,45,0,340,88,1,0,0,0,341,342,7,7,
	0,0,342,90,1,0,0,0,343,345,3,93,46,0,344,343,1,0,0,0,344,345,1,0,0,0,345,
	346,1,0,0,0,346,347,3,41,20,0,347,92,1,0,0,0,348,349,7,8,0,0,349,94,1,0,
	0,0,350,351,7,9,0,0,351,96,1,0,0,0,352,353,3,99,49,0,353,355,3,101,50,0,
	354,356,3,95,47,0,355,354,1,0,0,0,355,356,1,0,0,0,356,98,1,0,0,0,357,359,
	3,53,26,0,358,360,5,46,0,0,359,358,1,0,0,0,359,360,1,0,0,0,360,369,1,0,
	0,0,361,362,5,48,0,0,362,364,7,2,0,0,363,365,3,55,27,0,364,363,1,0,0,0,
	364,365,1,0,0,0,365,366,1,0,0,0,366,367,5,46,0,0,367,369,3,55,27,0,368,
	357,1,0,0,0,368,361,1,0,0,0,369,100,1,0,0,0,370,371,3,103,51,0,371,372,
	3,91,45,0,372,102,1,0,0,0,373,374,7,10,0,0,374,104,1,0,0,0,375,376,5,116,
	0,0,376,377,5,114,0,0,377,378,5,117,0,0,378,385,5,101,0,0,379,380,5,102,
	0,0,380,381,5,97,0,0,381,382,5,108,0,0,382,383,5,115,0,0,383,385,5,101,
	0,0,384,375,1,0,0,0,384,379,1,0,0,0,385,106,1,0,0,0,386,387,5,39,0,0,387,
	388,3,109,54,0,388,389,5,39,0,0,389,395,1,0,0,0,390,391,5,39,0,0,391,392,
	3,117,58,0,392,393,5,39,0,0,393,395,1,0,0,0,394,386,1,0,0,0,394,390,1,0,
	0,0,395,108,1,0,0,0,396,397,8,11,0,0,397,110,1,0,0,0,398,400,5,34,0,0,399,
	401,3,113,56,0,400,399,1,0,0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,
	5,34,0,0,403,112,1,0,0,0,404,406,3,115,57,0,405,404,1,0,0,0,406,407,1,0,
	0,0,407,405,1,0,0,0,407,408,1,0,0,0,408,114,1,0,0,0,409,412,8,12,0,0,410,
	412,3,117,58,0,411,409,1,0,0,0,411,410,1,0,0,0,412,116,1,0,0,0,413,414,
	5,92,0,0,414,418,7,13,0,0,415,418,3,119,59,0,416,418,3,123,61,0,417,413,
	1,0,0,0,417,415,1,0,0,0,417,416,1,0,0,0,418,118,1,0,0,0,419,420,5,92,0,
	0,420,431,3,67,33,0,421,422,5,92,0,0,422,423,3,67,33,0,423,424,3,67,33,
	0,424,431,1,0,0,0,425,426,5,92,0,0,426,427,3,121,60,0,427,428,3,67,33,0,
	428,429,3,67,33,0,429,431,1,0,0,0,430,419,1,0,0,0,430,421,1,0,0,0,430,425,
	1,0,0,0,431,120,1,0,0,0,432,433,7,14,0,0,433,122,1,0,0,0,434,436,5,92,0,
	0,435,437,5,117,0,0,436,435,1,0,0,0,437,438,1,0,0,0,438,436,1,0,0,0,438,
	439,1,0,0,0,439,440,1,0,0,0,440,441,3,57,28,0,441,442,3,57,28,0,442,443,
	3,57,28,0,443,444,3,57,28,0,444,124,1,0,0,0,445,446,5,110,0,0,446,447,5,
	117,0,0,447,448,5,108,0,0,448,449,5,108,0,0,449,126,1,0,0,0,450,454,7,15,
	0,0,451,453,3,135,67,0,452,451,1,0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,
	454,455,1,0,0,0,455,128,1,0,0,0,456,454,1,0,0,0,457,461,7,16,0,0,458,460,
	3,135,67,0,459,458,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,
	0,0,462,130,1,0,0,0,463,461,1,0,0,0,464,468,3,133,66,0,465,467,3,135,67,
	0,466,465,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,132,
	1,0,0,0,470,468,1,0,0,0,471,472,7,17,0,0,472,134,1,0,0,0,473,474,7,18,0,
	0,474,136,1,0,0,0,475,477,7,19,0,0,476,475,1,0,0,0,477,478,1,0,0,0,478,
	476,1,0,0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,6,68,0,0,481,138,1,
	0,0,0,53,0,178,182,186,190,194,201,206,208,212,215,219,226,230,235,243,
	246,253,257,261,267,270,277,281,289,292,299,303,307,312,315,318,323,326,
	331,336,344,355,359,364,368,384,394,400,407,411,417,430,438,454,461,468,
	478,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiLexer.__ATN) {
			AiLexer.__ATN = new ATNDeserializer().deserialize(AiLexer._serializedATN);
		}

		return AiLexer.__ATN;
	}


	static DecisionsToDFA = AiLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}