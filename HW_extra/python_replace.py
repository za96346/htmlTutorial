# 實現 python replace
# 規格是 replace(完整的字串, 待取代的字元,取代成的字元)
# replace("google#Facebook#aws", '#', '-') -> google-Facebook-aws

def replace(string, substing1, substing2):
    result = ""
    tempString = ""

    for char in string:
        if char != substing1:
            tempString += char
        else:
            result += tempString
            result += substing2
            tempString = ""
    result += tempString
    tempString = ""
    return result
# 1 
# 2 
# 3 
# 4 
# 5 
# 6 
# 7 google-
# 8 google-
replaceResult = replace("google#Facebook#aws", "#", "-")
print(replaceResult)