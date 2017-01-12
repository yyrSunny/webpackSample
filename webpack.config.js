/**
 * Created by yuyr on 2017/1/12.
 */
module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: __dirname + "/public",//�������ļ���ŵĵط�
        filename: "bundle.js"//���������ļ����ļ���
    },

    module: {//�������ļ������JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },

    devServer: {
        contentBase: "./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
        colors: true,//�ն���������Ϊ��ɫ
        historyApiFallback: true,//����ת
        inline: true//ʵʱˢ��
    }
};