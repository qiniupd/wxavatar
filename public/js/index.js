/* jshint undef: true, unused: true */
/* jshint expr: true, boss: true */
/* jshint browser: true, devel: true, jquery: true*/
/* global plupload*/

var Q = {};

Q.avatarUrl = 'http://needkane.qiniudn.com/QQ';
Q.photoUrl = '';
Q.photoSize = {
    width: 0,
    height: 0
};
Q.photoStyle = '';
Q.template = {
    temp1: {
        needName: false,
        post: '女盆友从南非给我带回来的20克拉蓝色钻石，可惜春节在夏威夷度假，晒得有点黑~~偶朋友圈的小伙伴们，你们春节假期怎么过？',
        photo: 'http://zblq.qiniudn.com/1.jpg',
        persons: ['李娜', '潘石屹', '章子怡', '王菲', '谢霆锋', '马云', '庆丰包子铺旅游团', '郭敬明', '韩寒', '新浪曹国伟'],
        comments: [
            ['郭美美', '求偶遇！'],
            ['章子怡', '求偶遇！'],
            ['郭敬明', '求偶！'],
            ['李云迪', '郭敬明', '萌！'],
            ['新浪曹国伟', '让“假期”飞！'],
            ['冯小刚', '你丫看春晚怎么不吐槽！']
        ]
    },
    temp2: {
        needName: false,
        post: '今年春晚还不错。该来的都来了。',
        photo: 'http://zblq.qiniudn.com/2.jpg',
        persons: ['蔡明', '朱军', '汪峰', '庆丰包子铺一分钟春晚广告', '新浪曹国伟', '章子怡', '张国立', '董卿'],
        comments: [
            ['宋祖英', '滚粗！'],
            ['赵本山', '滚粗！'],
            ['撒贝宁', '滚粗！'],
            ['周立波', '滚粗！'],
            ['郭德纲', '周立波', '滚粗！'],
            ['新浪曹国伟', '让“春晚穿帮镜头”飞！'],
            ['冯小刚', '你丫看春晚怎么不吐槽！']
        ]
    },
    temp3: {
        needName: false,
        post: '给大家拜年，扎金花送新年红包了！是女神就送21万，快来收~',
        photo: 'http://zblq.qiniudn.com/3.jpg',
        persons: ['张小龙', '马化腾', '庆丰包子铺营销咨询', '凤凰传奇', '汤唯', '新浪曹国伟', '马云', '汪峰', '章子怡'],
        comments: [
            ['汤唯', '么么哒！'],
            ['林志玲', '么么哒！'],
            ['苍井空', '么么哒！'],
            ['张小龙', '么么哒！'],
            ['凤凰传奇', '药，药，切克闹，煎饼果子来一套！'],
            ['凤姐', '骗纸！'],
            ['新浪曹国伟', '让“红包”飞！'],
            ['冯小刚', '你丫春晚重播了几十遍了，怎么还不吐槽！']
        ]
    },
    temp4: {
        needName: true,
        post: '今天菊花辣辣的。',
        photo: 'http://zblq.qiniudn.com/4.jpg',
        persons: ['王力宏', '周杰伦', '吴彦祖', '黄晓明', '刘烨', '李敏镐', '金城武', '陈冠希', '张亮'],
        comments: [
            ['王力宏', '每次和云迪在一起时，我也会这样。。'],
            ['周杰伦', '王力宏', '哎哟，这个屌，不错哦'],
            ['李敏镐', '撒啦嘿哟'],
            ['$name', '李敏镐', '欧巴，哦多克~'],
            ['黄晓明', '我的菊花闹太套！'],
            ['陈冠希', '$name', '可以约你做我下一部片子的女主角么？'],
            ['$name', '陈冠希', '滚开，我不是你想的那种女人！']
        ]
    },
    temp5: {
        needName: false,
        post: '收到图的亲，新年快乐，大吉大利！',
        photo: 'http://zblq.qiniudn.com/5.jpg',
        persons: ['张小龙', '马化腾', '庆丰包子铺营销咨询', '凤凰传奇', '汤唯', '新浪曹国伟', '马云', '汪峰', '章子怡'],
        comments: [
            ['汤唯', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['林志玲', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['苍井空', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['张小龙', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['王力宏', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['凤姐', '收到拜年图的亲，新年快乐，大吉大利！'],
            ['冯小刚', '收到拜年图的亲，新年快乐，大吉大利！等下别忘了看春晚']
        ]
    },
    tempempty: {
        post: '',
        persons: ['', '', ''],
        comments: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
};

var FONT = '黑体';
var NAME_SIZE = 32,
    POST_SIZE = 28,
    LIKE_SIZE = 26,
    COMMENT_SIZE = 26;
var MSG_BG = 'http://needkane.qiniudn.com/r.png?imageView2/2/w/110'

Q.utf8_encode = function(argString) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // +   bugfixed by: Rafal Kukawski
    // +   improved by: kirilloid
    // +   bugfixed by: kirilloid
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    if (argString === null || typeof argString === 'undefined') {
        return '';
    }

    var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var utftext = '',
        start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                (c1 >> 6) | 192, (c1 & 63) | 128
            );
        } else if (c1 & 0xF800 ^ 0xD800 > 0) {
            enc = String.fromCharCode(
                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        } else { // surrogate pairs
            if (c1 & 0xFC00 ^ 0xD800 > 0) {
                throw new RangeError('Unmatched trail surrogate at ' + n);
            }
            var c2 = string.charCodeAt(++n);
            if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.slice(start, stringl);
    }

    return utftext;
};

Q.base64_encode = function(data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['atob'] == 'function') {
    //    return atob(data);
    //}
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = Q.utf8_encode(data + '');

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
            break;
        case 2:
            enc = enc.slice(0, -1) + '=';
            break;
    }

    return enc;
};

Q.URLSafeBase64Encode = function(v) {
    v = Q.base64_encode(v);
    return v.replace(/\//g, '_').replace(/\+/g, '-');
};

//UTF-8 decoding
Q.utf8_decode = function(str_data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +      input by: Aman Gupta
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Norman "zEh" Fuchs
    // +   bugfixed by: hitwork
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: kirilloid
    // *     example 1: utf8_decode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    var tmp_arr = [],
        i = 0,
        ac = 0,
        c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0;

    str_data += '';

    while (i < str_data.length) {
        c1 = str_data.charCodeAt(i);
        if (c1 <= 191) {
            tmp_arr[ac++] = String.fromCharCode(c1);
            i++;
        } else if (c1 <= 223) {
            c2 = str_data.charCodeAt(i + 1);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            i += 2;
        } else if (c1 <= 239) {
            // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
            c2 = str_data.charCodeAt(i + 1);
            c3 = str_data.charCodeAt(i + 2);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        } else {
            c2 = str_data.charCodeAt(i + 1);
            c3 = str_data.charCodeAt(i + 2);
            c4 = str_data.charCodeAt(i + 3);
            c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
            c1 -= 0x10000;
            tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
            tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
            i += 4;
        }
    }

    return tmp_arr.join('');
};

Q.base64_decode = function(input) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    if (!input) {
        return input;
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    while (i < input.length) {

        enc1 = b64.indexOf(input.charAt(i++));
        enc2 = b64.indexOf(input.charAt(i++));
        enc3 = b64.indexOf(input.charAt(i++));
        enc4 = b64.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Q.utf8_decode(output);

    return output;
};

Q.URLSafeBase64Decode = function(v) {
    if (typeof v !== 'string') {
        return null;
    }
    v = v.replace(/_/g, '/').replace(/\-/g, '+');
    return Q.base64_decode(v);
};

Q.d = function(x, y) {
    return '/dx/' + x + '/dy/' + y + '/gravity/NorthEast';
};

Q.text = function(str, font, size, color, dx, dy) {
    var t = Q.URLSafeBase64Encode(str),
        f = Q.URLSafeBase64Encode(font),
        c = Q.URLSafeBase64Encode(color);
    return '/text/' + t + '/font/' + f + '/fontsize/' + size + '/fill/' + c + Q.d(dx, dy);
};

Q.image = function(url) {
    return '/image/' + Q.URLSafeBase64Encode(url) + '/dx/0/dy/0/gravity/SouthWest';
};
Q.image2 = function(url) {
    return '/image/' + Q.URLSafeBase64Encode(url) + '/dx/0/dy/0/gravity/NorthEast';
};
Q.getStyleAndDy = function() {
    var result = {
        styleName: '',
        dy: 0
    };
    var w = Q.photoSize.width,
        h = Q.photoSize.height;
    if (w > 570 || h > 400) {
        if (w / h > 570 / 400) {
            result.styleName = '-phw';
            result.dy = 570 * h / w;
        } else if (w / h < 570 / 400) {
            result.styleName = '-phh';
            result.dy = 400;
        } else {
            result.styleName = '-phfull';
            result.dy = 400;
        }
    } else if (w > 0 && h > 0) {
        result.dy = h;
    }
    result.dy = Math.floor(result.dy) + 1;
    return result;
};

Q.len = function(str) {
    var flag = 0,
        len = 0;
    for (var i = 0; i < str.length; i++) {
        if (/[A-Za-z0-9]/.test(str[i])) {
            if (flag === 1) len++;
            flag = (flag + 1) % 2;
        } else {
            len++;
        }
    }
    return len + flag;
};

Q.split2line = function(post, linesize, offset) {
    var msg = post,
        limit = linesize - offset,
        lines = [];
    var flag = 0;
    var count = 0;
    for (var i = 0; i < msg.length; i++) {
        if (/[A-Za-z0-9]/.test(msg[i])) {
            if (flag === 0) limit++;
            flag = (flag + 1) % 2;
        }
        if (count === limit) {
            lines.push(msg.slice(i - limit, i));
            limit = linesize;
            count = 0;
            count++;
        } else if (i === msg.length - 1) {
            lines.push(msg.slice(i - count, i + 1));
            break;
        } else {
            count++;
        }
    }
    return lines;
};

Q.split2LikeLine = function(persons) {
    var lines = [],
        temp = [],
        tempLen = 0;
    var limit = 18;
    for (var i = 0; i < persons.length; i++) {
        if (tempLen + Q.len(persons[i]) > limit) {
            lines.push(temp.join(', ') + ',');
            temp = [];
            tempLen = 0;
        }
        temp.push(persons[i]);
        tempLen += Q.len(persons[i]);
        if (i === persons.length - 1) {
            lines.push(temp.join(', '));
            break;
        }
    }
    return lines;
};

Q.initPluploader = function(browse_button_id, container_id, progress_id, error_id) {
    var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: document.getElementById(browse_button_id),
        container: document.getElementById(container_id),
        max_file_size: '100mb',
        url: 'http://up.qiniu.com',
        flash_swf_url: 'js/plupload/Moxie.swf',
        silverlight_xap_url: 'js/plupload/Moxie.xap',
        multi_selection: false,
        filters: {
            mime_types: [{
                title: "Image files",
                extensions: "jpg,gif,png"
            }]
        },
        multipart: true,
        multipart_params: {
            key: '',
            token: ''
        }
    });

    uploader.bind('Init', function(up, params) {
        //显示当前上传方式，调试用
        $.ajax({
            url: '/token',
            type: 'GET',
            cache: false,
            success: function(data) {
                if (data && data.token) {
                    up.settings.multipart_params.token = data.token;
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
    uploader.init();

    uploader.bind('FilesAdded', function(up, files) {
        up.start();
        up.refresh(); // Reposition Flash/Silverlight
    });

    uploader.bind('BeforeUpload', function(up, file) {
        var prefix = '';
        switch (browse_button_id) {
            case 'uploadAvatar':
                prefix = 'avatar/';
                break;
            case 'uploadPhoto':
                prefix = 'photo/';
                break;
            default:
                prefix = 'default/';
        }
        prefix += (new Date()).valueOf() + '/';
        up.settings.multipart_params.key = prefix + file.name;
    });

    uploader.bind('UploadProgress', function(up, file) {
        document.getElementById(progress_id).innerHTML = file.percent + "%," + up.total.bytesPerSec;
    });

    uploader.bind('Error', function(up, err) {
        document.getElementById(error_id).innerHTML += "\nError #" + err.code + ": " + err.message;
        up.refresh(); // Reposition Flash/Silverlight
    });


    uploader.bind('FileUploaded', function(up, file, info) {
        var res = $.parseJSON(info.response);
        var link = 'http://zblq.qiniudn.com/';
        if (res.key.indexOf('avatar/') > -1) {
            Q.avatarUrl = link + res.key;
            $('#avatar-preview').attr('src', Q.avatarUrl + '?imageMogr2/thumbnail/290x290!');
        } else if (res.key.indexOf('photo/') > -1) {
            Q.setPhoto(link + res.key);
        }
        document.getElementById(progress_id).innerHTML = '上传成功';
    });
};


Q.imgReady = (function() {
    var list = [],
        intervalId = null,

        // 用来执行队列
        tick = function() {
            var i = 0;
            for (; i < list.length; i++) {
                list[i].end ? list.splice(i--, 1) : list[i]();
            }
            (!list.length) && stop();
        },

        // 停止所有定时器队列
        stop = function() {
            clearInterval(intervalId);
            intervalId = null;
        };

    return function(url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
            img = new Image();
        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        }

        width = img.width;
        height = img.height;

        // 加载错误后的事件
        img.onerror = function() {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function() {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
                newWidth * newHeight > 1024
            ) {
                ready.call(img);
                onready.end = true;
            }
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function() {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();
            load && load.call(img);
            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        }
    };
})();


$(function() {



    // render functions
    // ------------------------------------------------
    var render = {};
    render.avatar = function(url) {
        return Q.image(url + '?imageMogr2/thumbnail/290x290!');
    };
    render.msg = function(txt, fontsize, dx, dy) {
        return Q.text(txt, FONT, fontsize, 'white', dx, dy)

    };
    render.post = function(postMsg, oy) {
        var y = oy,
            result = '',
            lines = Q.split2line(postMsg, 20, 0);
        for (var i = 0; i < lines.length; i++) {
            result += Q.text(lines[i], FONT, POST_SIZE, 'black', 122, y + i * 33);
        }
        return {
            url: result,
            h: lines.length * 33
        };
    };
    render.photo = function(url) {
        var ret = Q.getStyleAndDy(),
            photo = url ? Q.image(url + ret.styleName, 0, 0) : '';
        return {
            url: photo,
            h: ret.dy
        };
    };


    render.cutline = function(dy) {
        var cutlineUrl = 'http://zblq.qiniudn.com/cutline.png';
        return {
            url: Q.image(cutlineUrl, 122, dy),
            h: 14
        };
    };

    var buildURL = function() {
        var BG = 'http://needkane.qiniudn.com/14.jpg';

        var renderList = [],
            scanLine = 132;

        // step 1: render avatar
        var avatar = render.avatar(Q.avatarUrl);
        renderList.push(avatar);
        // step 1: render msg-bg
        var msg_bg = Q.image2(MSG_BG)
        renderList.push(msg_bg);
        // step 2: render name
        var numTxt = getNum();

        if (numTxt == "") {
            alert('请输入有效内容');
            return false;
        }
        if (numTxt.length > 3) {
            alert('信息数不在范围内');
            return false;
        }
        var txt = render.msg(numTxt, 1400, 20, 15);
        var re = /^[1-9]+[0-9]*]*$/;
        if (re.test(numTxt)) {
            switch (numTxt.length) {
                case 1:
                    txt = render.msg(numTxt, 1600, 32, 8);
                    break;
                case 3:
                    txt = render.msg(numTxt, 1100, 10, 20);
                    break;
            }
        } else {
            if (numTxt.length == 2) {
                txt = render.msg(numTxt, 930, 10, 27);
            }
        }


        renderList.push(txt);

        var finalUrl = BG + '?watermark/3' + renderList.join('');
        return finalUrl;
    };
    // ------------------------------------------------

    var loadTemplate = function(template) {

        var fillPost = function(post) {
            $('#post').val(post);
        };
        var fillLikes = function(persons) {
            $('#likes').html('');
            addLike(persons.length);
            var i = 0;
            $('.like').each(function() {
                if (i >= persons.length) {
                    return;
                }
                $(this).val(persons[i++]);
            });
        };
        var fillPhoto = function(photoUrl) {
            Q.setPhoto(photoUrl);
        };
        var fillComments = function(comments) {
            $('#comments').html('');
            addComment(comments.length);
            var i = 0;
            $('.comment').each(function() {
                if (i >= comments.length) {
                    return;
                }
                $(this).find('.namea').val(comments[i][0].replace('$name', name));
                if (comments[i].length === 3) {
                    $(this).find('.nameb').val(comments[i][1].replace('$name', name));
                    $(this).find('.msg').val(comments[i][2]);
                } else {
                    $(this).find('.msg').val(comments[i][1]);
                }
                i++;
            });
        };
        fillPost(template.post);
        if (template.photo) {
            fillPhoto(template.photo);
        } else {
            fillPhoto('');
        }
        fillLikes(template.persons);
        fillComments(template.comments);
        $('.waiting-wrapper').hide();
        $('.result-wrapper').hide();
    };

    Q.initPluploader('uploadAvatar', 'upload-wrapper-1', 'progess-1', 'error-1');
    Q.initPluploader('uploadPhoto', 'upload-wrapper-2', 'progess-2', 'error-2');
    $('#btn').on('click', function() {
        var img = document.getElementById('demo');
        var src = buildURL();
        if (src) {
            $('.waiting-wrapper').show();
            $('.result-wrapper').hide();
            Q.imgReady(src, function() {
                img.src = src;
                $('#download').attr('href', src + '&download');
                $('#demo').css({

                    "border": "solid 2px white"
                });
                $('.waiting-wrapper').hide();
                $('.result-wrapper').show();
            });
        }
    });
    $('.load-tmpl').on('click', function() {
        loadTemplate(Q.template[$(this).attr('id')]);
    });


    $('.page').on('swipeleft', function() {
        if ($(this).next().length > 0) {
            $(this).hide().next().show();
        }
    });
    $('.page').on('swiperight', function() {
        if ($(this).prev().length > 0) {
            $(this).hide().prev().show();
        }
    });
    $('.msg-bg').on('click', function() {
        var bgLink = $(this).children('img').attr('src')
        MSG_BG = bgLink;
        $('.bg-check').hide();
        $(this).children('div').show();
    })
    var getNum = function() {
        return document.getElementById('num').value;
    };
});