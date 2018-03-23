
#include "crypto/CCCrypto.h"

extern "C" {
//#include "crypto/base64/libb64.h"
#include "crypto/md5/md5.h"
}

NS_CC_BEGIN


void CCCrypto::MD5(void* input, int inputLength, unsigned char* output)
{
    MD5_CTX ctx;
    CRYPTO_MD5_Init(&ctx);
    CRYPTO_MD5_Update(&ctx, input, inputLength);
    CRYPTO_MD5_Final(output, &ctx);
}

void CCCrypto::MD5File(const char* path, unsigned char* output)
{
    FILE *file = fopen(path, "rb");
    if (file == NULL)
        return;
    
    MD5_CTX ctx;
    CRYPTO_MD5_Init(&ctx);
    
    int i;
    const int BUFFER_SIZE = 1024;
    char buffer[BUFFER_SIZE];
    while ((i = fread(buffer, 1, BUFFER_SIZE, file)) > 0) {
        CRYPTO_MD5_Update(&ctx, buffer, (unsigned) i);
    }
    
    fclose(file);
    CRYPTO_MD5_Final(output, &ctx);
}

const std::string CCCrypto::FileMd52Str(const char *path)
{
    unsigned char buffer[MD5_BUFFER_LENGTH];
    MD5File(path, buffer);
    char* hex = bin2hex(buffer, MD5_BUFFER_LENGTH);
    std::string ret(hex);
    delete[] hex;
    return ret;
}

const std::string CCCrypto::MD5String(void* input, int inputLength)
{
    unsigned char buffer[MD5_BUFFER_LENGTH];
    MD5(static_cast<void*>(input), inputLength, buffer);

    char* hex = bin2hex(buffer, MD5_BUFFER_LENGTH);
    std::string ret(hex);
    delete[] hex;
    return ret;
}


const std::string CCCrypto::MD5JS(char* input, bool isRawOutput)
{
    unsigned char buffer[MD5_BUFFER_LENGTH];
    MD5(static_cast<void*>(input), (int)strlen(input), buffer);
    

    if (isRawOutput)
    {
        std::string ret((char*)buffer, MD5_BUFFER_LENGTH);
        return ret;
    }
    else
    {
        char* hex = bin2hex(buffer, MD5_BUFFER_LENGTH);
        std::string ret(hex);
        delete[] hex;
        return ret;
    }
    
}

const std::string CCCrypto::MD5FileJS(const char* path)
{
    unsigned char buffer[MD5_BUFFER_LENGTH];
    MD5File(path, buffer);
    
    char* hex = bin2hex(buffer, MD5_BUFFER_LENGTH);
    std::string ret(hex);
    delete[] hex;
    
    return ret;
}

char* CCCrypto::bin2hex(unsigned char* bin, int binLength)
{
    static const char* hextable = "0123456789abcdef";
    
    int hexLength = binLength * 2 + 1;
    char* hex = new char[hexLength];
    memset(hex, 0, sizeof(char) * hexLength);
    
    int ci = 0;
    for (int i = 0; i < 16; ++i)
    {
        unsigned char c = bin[i];
        hex[ci++] = hextable[(c >> 4) & 0x0f];
        hex[ci++] = hextable[c & 0x0f];
    }
    
    return hex;
}

NS_CC_END
