# function

# 加法功能
def add(a, b):
    result = a + b

    print("加數是: ", a)
    print("被加數是: ", b)
    print("結果是: ", result)

    return result

def minus(a, b):
    print(a - b)

def times(a, b):
    print(a * b)

def division(a, b):
    print(a / b)


twoNumResult = add(5, 10)
minusResult = minus(twoNumResult, 80)

print("twoNumResult ", twoNumResult)


def cal_area_of_triangle(bottom, height):
    cal = bottom * height / 2
    return cal

triangle = cal_area_of_triangle(4, 5)
print("面積為: ",triangle)