#iphoneFactory(quantity) -> [{info...}, {info...}.....]


# object orient programming | functional programming


def iphoneFactory(quantity):
    result = []
    for i in range(quantity):
        result.append({
            "size": 6.5,
            "color": "gray",
            "model": "11 pro max",
            "isBroken": i % 2 == 0
        })
    return result

def qualityVerification(iphoneList):
    print("iphoneList =>", iphoneList)
    for iphoneInfoDict in iphoneList:
        print("iphoneInfoDict => ", iphoneInfoDict)
        if iphoneInfoDict['isBroken']:
            print("This phone is broken.")




iphoneList = iphoneFactory(5)
qualityVerification(iphoneList)