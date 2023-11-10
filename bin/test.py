def output():
    print("base array", array)
    print("array ratio", array_ratio)    
    print("array cost", cost_each) 
    print("search array", search_array) 

#input for first line
first_line_un = input()
first = first_line_un.split()
count = int(first[0])
mana = int(first[1])

#input for second line
input_string = input()
numbers_un = input_string.split()
array = [int(num) for num in numbers_un]

array_ratio = []
search_array = []
cost_each = []
count = 0
damage = 0

#cost array & ratio array 
for i in range(len(array)):
    cost = 2 ** count
    cost_each.append(cost)
    temp = array[i]/cost
    array_ratio.append(temp)
    search_array.append(temp)
    count += 1

#search array
search_array.sort()

#most worth
largest = search_array[len(search_array)-1]
index_largest = array_ratio.index(largest)
#print("largest number is", largest)

#unformatted index applicable for ratio, cost, base array and ! search array

while (mana > 0):
    
    
    #cannot afford
    if (mana < cost_each[index_largest]):
        array_ratio.remove(array_ratio[index_largest])
        array.remove(array[index_largest])
        cost_each.remove(cost_each[index_largest])
        search_array.remove(search_array[len(search_array)-1])
        #reset largest
        largest = search_array[len(search_array)-1]
        index_largest = array_ratio.index(largest)
    #output()
    
    #print(cost_each)
    #print(index_largest)
    mana -= cost_each[index_largest]
    damage += array[index_largest]
    #print("current dmg", damage)
print(damage)

#patches
#check for maximum number of spells for each to deduct at once then deduct them together