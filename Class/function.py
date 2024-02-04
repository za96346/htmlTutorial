import time

# class SmartPhone:
#     def __init__(self, color: str, size: int, budge: int, brand: str) -> None:
#         self.color = color
#         self.size = size
#         self.budge = budge
#         self.brand = brand

def smartPhoneFactory(
    color: str = None,
    size: int = None,
    budge: int = None,
    brand: str = None
):
    if not brand:
        raise Exception("brand is not assigned.")
    if not budge:
        raise Exception("budge is not assigned.")
    if not color:
        raise Exception("color is not assigned.")
    if not size:
        raise Exception("size is not assigned.")
    
    time.sleep(10)

    # smartPhone = SmartPhone(
    #     color,
    #     size,
    #     budge,
    #     brand
    # )
    smartPhone = {
        "color": color,
        "size": size,
        "budge": budge,
        "brand": brand
    }
    return  smartPhone

color = input("color : ")
size = input("size : ")
budge = input("budge : ")
brand = input("brand : ")

smartPhone = smartPhoneFactory(
    color,
    size,
    budge,
    brand
)
print(smartPhone)