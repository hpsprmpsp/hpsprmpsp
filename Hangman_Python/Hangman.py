#! /usr/bin/python3
import random
import urllib.request

if __name__ == '__main__':
        print("Welcome to hangman!!")
        with open('words.txt','r') as r:
            words=list(r)
        
        word=random.choice(words)
        word = "".join(word)
        #word="EVAPORATE"
        guessed = "_" * len(word)
        word = list(word)
        guessed = list(guessed)
        lstGuessed = set()
        wrong=0
        while True:
                letter = input("guess letter: ")
                if letter.upper() in lstGuessed:
                        print("Already guessed!!")
                elif letter.upper() in word:
                        print("Correct guess")
                        index = word.index(letter.upper())
                        guessed[index] = letter.upper()
                        word[index] = '_'
                else:
                        #print(''.join(guessed))
                        if letter is not '':
                                lstGuessed.add(letter.upper())
                                wrong+=1
                        #letter = input("guess letter: ")
                        print("Incorrect Guess(life lef= ",6-wrong," times)")
                print(''.join(guessed))
                print("==================================")
                if '_' not in guessed:
                       print("You won!!")
                       break
                elif wrong==6:
                        print("You have used all of your life!!! You dead!!")
                        break
