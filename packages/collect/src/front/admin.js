// 定义一个变量用于保存格式文件的地址
var formatterPath;

$(document).ready(function() {
  // 网页加载完成时，从后台获取所有调研项目
  fetchAllProjects();

  // 监听上传按钮旁的删除按钮
  // 当上传一个文件时，点击删除可以重置上传文件
  $('#del-upload-formatter').click(handleResetUploadItem)
});

var myFormData = {
  expiration: '',
  projectName: '',
  formatter: formatterPath,
};

// 上传格式要求
layui.use('upload', function() {
  var upload = layui.upload;
  var uploadOpts = {
    elem: '#upload-format-file',
    url: UPLOAD_URL,
    method: 'post',
    data: { name: 'formatter' },
    accept: 'file',
    done: handleSubmitDone,
    error: function() {}
  }
  
  upload.render(uploadOpts);
})

// 选择日期
layui.use('laydate', function() {
  var laydate = layui.laydate;

  laydate.render({
    elem: '#expiration',
    done: function(value) { myFormData.expiration = value }
  })
})

layui.use('form', function() {
  var form = layui.form;
  form.render();
  form.on('submit(my-form)', handleSubmitForm)
})

/**
 * 处理后端响应
 * @param {response} res 后端响应
 */
function handleSubmitDone(res) {
  // 格式文件的地址
  formatterPath = res.data.path;
  // 格式文件的名称（经过后端的重新命名）
  myFormData.formatter = res.data.name;
  // 格式文件的原名称
  $('#upload-formatter').text(res.data.origin);
  // 显示删除按钮
  $('#del-upload-formatter').show();
  // 弹出窗显示上传完成的消息
  layer.msg(res.data.origin + res.msgCN, {offset: '32px'});
}

/**
 * 处理提交表格事件
 * @param {data} data 表格 data 对象
 */
function handleSubmitForm(data) {
  myFormData.projectName = data.field.projectName;

  $.ajax({
    url: ADD_ITEM_URL,
    type: 'post',
    dataType: 'json',
    async: false,
    data: myFormData,
    success: function(data) {
      // 显示表格提交的状态
      layer.msg(data.msgCN);
      // 表格提交成功后，立即获取全部项目以刷新时间轴
      fetchAllProjects();
    }
  })
}

/**
 * 重置上传文件
 * @param {event} e 鼠标事件
 */
function handleResetUploadItem(e) {
  e.preventDefault();
  $('#upload-formatter').text('');
  $('#del-upload-formatter').hide();
  formatterPath = undefined;
}

/**
 * 渲染生成时间轴子元素
 * @param {string} expiration 截止日志
 * @param {string} title 项目名称
 * @param {string} formatter 格式文件
 * @returns 时间轴子元素
 */
function renderTimelineItem(expiration, title, formatterFileName) {
  var downloadUrl = UPLOAD_TMP_URL + "/" + formatterFileName;
  var el = [
    '<li class="layui-timeline-item">',
    '  <i class="layui-icon layui-timeline-axis">',
    '    &#xe63f;',
    '  </i>',
    '  <div class="layui-timeline-content layui-text">',
    '    <h3 class="layui-timeline-title">',
           expiration,
    '    </h3>',
    '    <p>',
           title,
    '    </p>',
    '    <div>',
    '      <a href="' + downloadUrl + '" download="' + formatterFileName + '">',
    '        格式下载',
    '      </a>',
    '    </div>',
    '  </div>',
    '</li>'
  ]
  return el.join('\n');
}

/**
 * 从后台获取所有调研项目
 * 并插入到时间轴列表中
 */
function fetchAllProjects() {
  $('#all-projects').empty();

  $.ajax({
    url: ALL_ITEMS_URL,
    type: 'POST',
    dataType: 'json',
    async: false,
    success: function(data) {
      for (var i = 0; i< data.data.length; i++) {
        var project = data.data[i];
        $('#all-projects').append(
          renderTimelineItem(
            project.expiration,
            project.projectName,
            project.formatter
          )
        );
      }
    }
  })
}