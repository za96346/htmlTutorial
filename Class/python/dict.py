# { [key]: value }
iphoneProductInfo = {}

# 加入新的屬性進入dict
iphoneProductInfo["size"] =" 6.5"
iphoneProductInfo["color"] = "gray"
iphoneProductInfo["model"] = "11 pro max"


print(iphoneProductInfo.items())

for key, value in iphoneProductInfo.items():
    print(key, value)