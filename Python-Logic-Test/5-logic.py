def decrypt_cipher(text, k):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    decrypted = ""
    
    for char in text.upper():
        if char in alphabet:
            # หาตำแหน่งปัจจุบัน
            current_idx = alphabet.index(char)
            # ถอยหลัง k ตำแหน่ง (ใช้ modulo 26 เพื่อให้วนจาก A กลับไป Z ได้)
            new_idx = (current_idx - k) % 26
            decrypted += alphabet[new_idx]
        else:
            decrypted += char 
            
    return decrypted


encrypted_word = "VTAOG"
k_value = 2
result = decrypt_cipher(encrypted_word, k_value)

print(f"Encrypted: {encrypted_word} (k={k_value})")
print(f"Decrypted: {result}") 