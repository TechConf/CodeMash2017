module Main where

import System.Environment

data Token =
  LParen
  | RParen
  | Dot
  | Backslash
  | Alpha Char

alphabet :: String
alphabet = "abcdefghijklmnopqrstuvwxyz"

tokenize :: String -> [Token]
tokenize [] = []
tokenize ('(':rest) = LParen:tokenize rest
tokenize (')':rest) = RParen:tokenize rest
tokenize ('.':rest) = Dot:tokenize rest
tokenize ('\\':rest) = Backslash:tokenize rest
tokenize (char:rest) =
  (if elem char alphabet
  then [Alpha char]
  else []) ++ tokenize rest

data Term =
  Var Char
  | Lambda Char Term
  | Closure Char Term Env
  | App Term Term

parse :: [Token] -> Term
parse tokens = fst (parseSingle tokens)

parseSingle :: [Token] -> (Term, [Token])
parseSingle (Alpha c:rest) = (Var c, rest)
parseSingle (Backslash:Alpha argName:Dot:bodyToks) =
  let
    (body, rest) = parseSingle bodyToks
  in
    (Lambda argName body, rest)
parseSingle (LParen:innerToks) =
  let
    (first, secondToks) = parseSingle innerToks
    (second, RParen:rest) = parseSingle secondToks
  in
    (App first second, rest)
parseSingle _ = error "Parser error"

eval :: Term -> Term
eval = evalInEnv []

type Env = [(Char, Term)]

evalInEnv :: Env -> Term -> Term
evalInEnv env (Var name) =
  case lookup name env of
    Nothing -> error "Name not found"
    Just t -> t
evalInEnv env (Lambda argName body) = Closure argName body env
evalInEnv env (App fn op) =
  let
    (Closure argName body enclosedEnv) = evalInEnv env fn
    evaluatedOp = evalInEnv env op
    newEnv = (argName, evaluatedOp):enclosedEnv ++ env
  in
    evalInEnv newEnv body
evalInEnv _ closure = closure

pretty :: Term -> String
pretty (Var name) = [name]
pretty (App fn op) = concat ["(", pretty fn, " ", pretty op, ")"]
pretty (Lambda argName body) = concat ["\\", [argName], ".", pretty body]
pretty (Closure argName body _) = concat ["\\", [argName], ".", pretty body]

interp :: String -> String
interp = pretty . eval . parse . tokenize

main :: IO ()
main = do
  args <- getArgs
  case args of
    [code] -> putStrLn (interp code)
    _ -> putStrLn "Where's the code?"
