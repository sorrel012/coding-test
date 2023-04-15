msg = "It is Time"
print(msg)
print(msg.upper())
print(msg.lower())

print()

tmp = msg.upper()
print(tmp.count('T'))
print(tmp.find('T'))
print(tmp.rfind('T'))

print()

print(tmp[:2])
print(tmp[3:5])

print()

print(len(msg))

for i in range(len(msg)):
    print(msg[i], end='')
print()
    
for x in msg:
    print(x, end='')
print()

print()

for x in msg:
    if x.isupper():
        print(x, end=' ')
print()

print()

for x in msg:
    if x.isalpha():
        print(x, end='')
print()
print()

tmp = "AZ"
for x in tmp:
    print(ord(x))
print()

tmp = "az"
for x in tmp:
    print(ord(x))
print()

tmp = 65
print(chr(tmp))

tmp = 97
print(chr(tmp))