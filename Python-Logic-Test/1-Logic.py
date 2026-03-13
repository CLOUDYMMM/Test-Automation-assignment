list_a = [1, 2, 3, 5, 6, 8, 9]
list_b = [3, 2, 1, 5, 6, 0]

def find_duplicate_items(list_a, list_b):
    set_a = set(list_a)
    set_b = set(list_b)
    duplicates = list(set_a.intersection(set_b))
    duplicates.sort()
    return duplicates

result = find_duplicate_items(list_a, list_b)
print(f"List A: {list_a}")
print(f"List B: {list_b}")
print(f"Duplicate Items: {result}")