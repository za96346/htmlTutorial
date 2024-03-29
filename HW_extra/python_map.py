# 實現 python map
# 規格是 Map(傳入的函式迭代器, 傳入要迭代的list)
# Map(lambda x: x + 10, [1, 2, 3, 4, 5]) -> [11, 12, 13, 14, 15]

# 可參考 https://www.runoob.com/python/python-func-map.html

def Map(iteralFunction, iteralList) -> list:
    # 在這邊編寫你的 map邏輯
    result = []
    index = 0
    for listItem in iteralList: # char字元
        r = iteralFunction(listItem, index)
        if r:
            result.append(
                listItem
            )
        index += 1
    return result

# 1   [11]
# 2   [11,12]


# 這邊有用到 lambda 匿名函式
# 可以讓你不用命名函式名稱直接做使用
mapResult = Map(
    lambda x, index: x + 10,
    [1, 2, 3, 4, 5]
)
print(mapResult)