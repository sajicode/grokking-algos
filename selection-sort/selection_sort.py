def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i
  return smallest_index

def selection_sort(arr):
  newArr = []
  for i in range(len(arr)):
    print(arr)
    smallest = findSmallest(arr)
    #* array.pop deletes and returns the item at the specified index
    newArr.append(arr.pop(smallest))

  return newArr


my_list = [5,3,6,2,10]

print(selection_sort(my_list))