def casear(message, shift):
    encryptedMessage = ""
    for char in message:
        if char.isalpha():
            shiftNumber = (ord(char) - ord('A') + shift) % 26
            encryptedChar = chr(ord('A') + shiftNumber)
            encryptedMessage += encryptedChar
    return encryptedMessage

def validMessage():
    while True:
        message = input("암호화할 메시지를 입력하세요. (대문자로만 출력): ").upper()
        if all(char.isalpha() for char in message):
            return message
        else:
            print("메시지에 알파벳만 포함되어야 합니다. 다시 입력해주세요.")

def validShift():
    while True:
        try:
            shift = int(input("움직일 거리를 입력하세요. (0 < n < 26): "))
            if 0 < shift < 26:
                return shift
            else:
                print("움직일 거리는 0보다 크고 26보다 작은 자연수여야 합니다. 다시 입력해주세요.")
        except valueError:
            print("숫자를 입력해주세요. 다시 입력하세요.")

message = validMessage()
shift = validShift()

cipherMessage = casear(message, shift)

if cipherMessage:
    print(f"암호화된 메시지: {cipherMessage}")
else:
    print("암호화 과정에서 오류가 발생했습니다.")