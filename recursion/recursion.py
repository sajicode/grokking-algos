def countdown(num):
  print(num)
  if num <= 0:
    return
  else:
    countdown(num - 1)

# countdown(6)

def factorial(num):
  if num == 1:
    return num
  else:
    return num * factorial(num - 1)

