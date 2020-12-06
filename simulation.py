import random
import time


while True:
    temp=random.randint(0,100)
    f = open("temps.txt", "w")
    f.write(f"{temp}")
    f.close()
    f = open("temps.txt", "r")
    print(f.read())
    time.sleep(1)
