
#ifndef __CC_CCCRYPTO_H_
#define __CC_CCCRYPTO_H_
#include <cstdint>
#include "base/ccMacros.h"

NS_CC_BEGIN

class CCCrypto
{
public:
    static const int MD5_BUFFER_LENGTH = 16;
    
    /** @brief Calculate MD5, get MD5 code (not string) */
    static void MD5(void* input, int inputLength,
                    unsigned char* output);
    
    static const std::string FileMd52Str(const char* path);
    
    static void MD5File(const char* path, unsigned char* output);
    
    static const std::string MD5String(void* input, int inputLength);
    
    /** @brief Calculate MD5, return MD5 string */
    static const std::string MD5JS(char* input, bool isRawOutput);

    static const std::string MD5FileJS(const char* path);

private:
    CCCrypto(void) {}
    
    static char* bin2hex(unsigned char* bin, int binLength);
    
};

NS_CC_END

#endif // __CC_CCCRYPTO_H_
