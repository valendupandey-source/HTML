def check_disarium(number):
    num_str = str(number)
    total = 0   
    for i in range(len(num_str)):
        digit = int(num_str[i])
        position = i + 1      
        total = total + (digit ** position)   
    return total == number
num = int(input(" Check wheather a number is Disarium one or not : "))
if check_disarium(num):
    print("It is a Disarium number!")
elif num < 0:
    print(" Please enter a whole number.. ")
else:
    print("It is NOT a Disarium number.")



