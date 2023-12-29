import audio1 from '../audio/audio2struk31.mp3';
import audio2 from '../audio/audio2struk32.mp3';
import audio3 from '../audio/audio2struk33.mp3';

export default [
    {
        id: 1,
        question: "'krema kremi' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦿꦩꦏꦿꦱ',
            'ꦏꦿꦩꦏꦾꦩꦶ',
            'ꦏꦽꦩꦏꦿꦩꦶ',
            'ꦏꦽꦩꦏꦽꦩꦶ'
        ],
        struktur: [
            'Tembung krema, aksara ka diwenehi keret "re" dadi kre lan aksara ma, sawise iku dilanjut tembung kremi, aksara ka diwenehi keret "re" dadi kre lan aksara ma diwenehi wulu "i" dadi mi',
        ],
        audio: audio1
    },
    {
        id: 2,
        question: " 'pasya kyai' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦥꦱꦾꦏꦿꦲꦶ',
            'ꦥꦱꦏꦽꦲꦶ',
            'ꦥꦱꦿꦥꦿꦲꦶ',
            'ꦥꦱꦾꦏꦾꦲꦶ'
        ],
        struktur: [
            'Tembung pasya, aksara pa lan aksara sa diwenehi pengkal "ya" dadi sya, sawise iku dilanjut tembung kyai, aksara ka diwenehi pengkal "ya" dadi kya lan aksara ha diwenehi wulu "i" dadi hi, hi -> i ',
        ],
        audio: audio2
    },
    {
        id: 3,
        question: " 'krasa cakra' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦾꦱꦕꦏꦽ',
            'ꦏꦿꦱꦕꦏꦾ',
            'ꦏꦿꦱꦕꦏꦿ',
            'ꦏꦽꦱꦕꦥꦿ'
        ],
        struktur: [
            'Tembung krasa, aksara ka diwenehi cakra "ra" dadi kra lan aksara sa sawise iku dilanjut tembung cakra, aksara ca lan aksara ka diwenehi cakra "ra" dadi kra ' ,
        ],
        audio: audio3
    },
];

export const answerStruk6 = [3, 3, 2];
