# 實現 python split
# 規格是 split(要分割的字串,要分割的字元)
# split("google#Facebook#aws", '#') -> [google, Facebook, aws]

def split(string, substing):
    result = []
    tempString = ""

    for char in string:
        if char != substing:
            tempString += char
        else:
            result.append(tempString)
            tempString = ""
    # result.append(tempString)
    # tempString = ""
    return result
# 1 []
# 2 []
# 3 []
# 4 []
# 5 []
# 6 []
# 7 ["google"]
# 8 ["google"]
# print(split)
splitResult = split("google#Facebook#aws", "#")
print(splitResult)