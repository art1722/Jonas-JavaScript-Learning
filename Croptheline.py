import os

# os.chdir('C:\\Users\\chawakorn\\.atom\\Thinkpython')
word = ""
fin0 = open('text.txt', 'r')
fin1 = open('result.txt', 'a+')

for line in fin0:
    line = line.replace('\n', ' ')
    if not line.isspace():
        word += line

print(len(word))
fin1.write(word)

fin0.close()
fin1.close()
"""
with open(res.txt, 'a') as g:
    g1 = g.write()
"""
