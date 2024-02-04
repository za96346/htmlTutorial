# function

# 加法功能
# def add(a, b):
#     result = a + b

#     print("加數是: ", a)
#     print("被加數是: ", b)
#     print("結果是: ", result)

#     return result

# def minus(a, b):
#     print(a - b)

# def times(a, b):
#     print(a * b)

# def division(a, b):
#     print(a / b)


# twoNumResult = add(5, 10)
# minusResult = minus(twoNumResult, 80)

# print("twoNumResult ", twoNumResult)


# def cal_area_of_triangle(bottom, height):
#     cal = bottom * height / 2
#     return cal

# triangle = cal_area_of_triangle(4, 5)
# print("面積為: ",triangle)
# a = 8
# print("a" if a > 5 else "b")

# a = [1, 2, 3, 4, 5]
# # a = [11, 12, 13, 14, 15]

# def listGeneration(size: int):
#     new = []
#     for i in range(size):
#         new.append(i)

#     return new

# def add_ten_to_list_elements(param: list):
#     newData = []
#     for i in param:
#         newData.append(i + 10)

#     return newData

# result = listGeneration(100)
# print(add_ten_to_list_elements(result))


# result2 = listGeneration(5)
# add_ten_to_list_elements(result2)


def oddList(size: int):
    newList = []
    for i in range(size * 2):
        if i % 2 == 1:
            newList.append(i)
    return newList
print(oddList(10))