     
var extendsMethods = {
    formateProtolData(payload){
        for(var key in payload){
            if(typeof(payload[key]) == 'string'){
                payload[key] = Base64.encode(payload[key]);
            }else if (typeof(payload[key] == 'object')){
                payload[key] == extendsMethods.formateProtolData(payload[key])
            }

        }  
        return payload;
    },
    formateBufferData(object){
        for (var key in object) {
            if (typeof (object[key]) == 'string') {
                object[key] = Base64.decode(object[key]);
            } else if (typeof (object[key] == 'object')) {
                object[key] == extendsMethods.formateBufferData(object[key])
            }
        }
        return object; 
    },
    createBuffer:function(payload){
        payload = payload || {};
        payload = extendsMethods.formateProtolData(payload);
        var errMsg = this.verify(payload);
        if (errMsg)
            cc.log(errMsg);
        var message = this.create(payload);
        var buff = this.encode(message).finish();
        return buff;
    },
    decodeBuffer:function(buffer){
        var message = this.decode(buffer);
        var object = this.toObject(message, {
            //enums: String,  // enums as string names
            //longs: String,  // longs as strings (requires long.js)
            bytes: String,  // bytes as base64 encoded strings
            defaults: true, // includes default values
            arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
            objects: true,  // populates empty objects (map fields) even if defaults=false
            oneofs: true    // includes virtual oneof fields set to the present field's name
        })
        object = extendsMethods.formateBufferData(object)
        return object;
    },

    decodePacket:function(buffer){
        var message = this.decode(buffer);
        var object = this.toObject(message, {
            //enums: String,  // enums as string names
            //longs: String,  // longs as strings (requires long.js)
            //bytes: String,  // bytes as base64 encoded strings
            defaults: true, // includes default values
            arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
            objects: true,  // populates empty objects (map fields) even if defaults=false
            oneofs: true    // includes virtual oneof fields set to the present field's name
        })
        return object;
    },
}

module.exports = extendsMethods;
        