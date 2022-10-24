var articleBody;
var attach1;
var attach2;
var attach3;

var allProjects = [];

var progressEl;

$(document).ready(function() {
  $('#del-upload-body').click(function(e) {
    e.preventDefault();
    $('#upload-article-body').text('');
    $('#del-upload-body').hide();
    articleBody = undefined;
  })

  $('#del-upload-attach1').click(function(e) {
    e.preventDefault();
    $('#upload-attach1').text('');
    $('#del-upload-attach1').hide();
    attach1 = undefined;
  })

  $('#del-upload-attach2').click(function(e) {
    e.preventDefault();
    $('#upload-attach2').text('');
    $('#del-upload-attach2').hide();
    attach2 = undefined;
  })

  $('#del-upload-attach3').click(function(e) {
    e.preventDefault();
    $('#upload-attach3').text('');
    $('#del-upload-attach3').hide();
    attach3 = undefined;
  })
  
});

layui.use('element', function() {
  progressEl = layui.element;
})

layui.use('form', function() {
  var form = window.layui.form;

  $.ajax({
    url: ITEMS_NOT_EXPIRES_URL,
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      // console.log(data);

      for (var i = 0; i < data.data.length; i++) {
        var op = data.data[i];
        $("#project-select").append(createOption(op.expiration, op.projectName));
      }

      allProjects = data.data;
      
      var events = [];

      for (var j = 0; j < allProjects.length; j++) {
        var project = allProjects[j];
        var start = project.expiration;
        var p = UPLOAD_TMP_URL + project.formatter;
        events.push({
          title: project.projectName,
          start: start,
          extendedProps: {
            link: '<a style="color: red" " href="' + p + '" download="' + project.formatter + '">' + '点击下载格式要求' + '</a>'
          }
        })
      }
    
      $('#calendar').fullCalendar({
        weekends: true,
        locale: 'zh-cn',
        initialView: 'listWeek',
        headerToolbar: { end: 'today prev,next' },
        events: events,
        eventClick: function(calEvent, jsEvent, view) {
          layer.alert(calEvent.title + '<br />' + calEvent.extendedProps.link);
        }
      });

      form.render();
    },
    error: function(xhr, status, error) {
      // console.log(error);
    }
  });

  form.on('submit(my-form)', function(data) {
    layer.confirm('确定提交吗？', function(index) {
      if (!articleBody) {
        layer.alert('未添加正文');
      } else {
        submitMyForm(data.field);
      }
      
      layer.close(index);
    })
    return false;
  })
})

// 上传正文
layui.use('upload', function() {
  var upload = layui.upload;
  
  var uploadInst = upload.render({
    elem: '#uploadFile',
    url: UPLOAD_URL,
    method: 'post',
    data: { name: 'articleBody' },
    accept: 'file',
    before: function() {
      $('#upload-file-progress').show();
    },
    done: function(res) {
      articleBody = res.data.path;
      $('#upload-article-body').text(res.data.origin);
      $('#del-upload-body').show();
      layer.msg(res.data.origin + res.msgCN, {offset: '32px'});
    },
    error: function() {},
    progress: function(n) {
      var percent = n + '%';
      progressEl.progress('upload-file-progress', percent);
      if (n === 100) {
        setTimeout(function() {$('#upload-file-progress').hide("slow");}, 1000);
      }
    }
  })
})

// 附件1
layui.use('upload', function() {
  var upload = layui.upload;
  
  var uploadInst = upload.render({
    elem: '#uploadAttach1',
    url: uploadUrl,
    method: 'post',
    data: { name: 'attach1' },
    accept: 'file',
    before: function() {
      $('#upload-file-progress').show();
    },
    done: function(res) {
      attach1 = res.data.path;
      $('#upload-attach1').text(res.data.origin);
      $('#del-upload-attach1').show();
      layer.msg(res.data.origin + res.msgCN, {offset: '32px'});
    },
    error: function() {},
    progress: function(n) {
      var percent = n + '%';
      progressEl.progress('upload-file-progress', percent);
      if (n === 100) {
        setTimeout(function() {$('#upload-file-progress').hide("slow");}, 1000);
      }
    }
  })
})

// 附件2
layui.use('upload', function() {
  var upload = layui.upload;
  
  var uploadInst = upload.render({
    elem: '#uploadAttach2',
    url: uploadUrl,
    method: 'post',
    data: { name: 'attach2' },
    accept: 'file',
    before: function() {
      $('#upload-file-progress').show();
    },
    done: function(res) {
      attach2 = res.data.path;
      $('#upload-attach2').text(res.data.origin);
      $('#del-upload-attach2').show();
      layer.msg(res.data.origin + res.msgCN, {offset: '32px'});
    },
    error: function() {},
    progress: function(n) {
      var percent = n + '%';
      progressEl.progress('upload-file-progress', percent);
      if (n === 100) {
        setTimeout(function() {$('#upload-file-progress').hide("slow");}, 1000);
      }
    }
  })
})

// 附件3
layui.use('upload', function() {
  var upload = layui.upload;
  
  var uploadInst = upload.render({
    elem: '#uploadAttach3',
    url: uploadUrl,
    method: 'post',
    data: { name: 'attach3' },
    accept: 'file',
    before: function() {
      $('#upload-file-progress').show();
    },
    done: function(res) {
      attach3 = res.data.path;
      $('#upload-attach3').text(res.data.origin);
      $('#del-upload-attach3').show();
      layer.msg(res.data.origin + res.msgCN, {offset: '32px'});
    },
    error: function() {},
    progress: function(n) {
      var percent = n + '%';
      progressEl.progress('upload-file-progress', percent);
      if (n === 100) {
        setTimeout(function() {$('#upload-file-progress').hide("slow");}, 1000);
      }
    }
  })
})

function submitMyForm(field) {
  field.tmpFile = {
    articleBody: articleBody,
    attach1: attach1,
    attach2: attach2,
    attach3: attach3
  };

  // ie8 生产环境请勿使用，可能会阻塞进程
  // console.log(field);

  $.ajax({
    url: formUrl,
    type: 'POST',
    dataType: 'json',
    // 使用同步发送数据，在 ie8 中异步后台无法获取 data
    async: false,
    data: field,
    success: function(data, status) {
      layer.alert(data.msgCN);
    }
  })
}

function createOption(expiration, project) {
  var name = '(' + expiration + ')' + project;
  return '<option value="' + name + '">' + name + '</option>'
}

function renderCalendar(events) {
  
}