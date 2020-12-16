import random
import time


while True:
    temp=random.uniform(20.00,25.00)
    f = open("temps.txt", "w")
    f.write(f"{temp}")
    f.close()
    f = open("temps.txt", "r")
    print(f.read())
    time.sleep(1)
