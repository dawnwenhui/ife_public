/**
 * Created by Administrator on 2017/3/16 0016.
 */
function init() {

    //Renderer 渲染器和Canvas元素绑定
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("mainCanvas")
    });

    //Three.js生成Canvas元素
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize(400,300);

    var renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize(400,300);

    var renderer3 = new THREE.WebGLRenderer();
    renderer3.setSize(400,300);

    var renderer4 = new THREE.WebGLRenderer();
    renderer4.setSize(400,300);

    var renderer5 = new THREE.WebGLRenderer();
    renderer5.setSize(400,300);

    var renderer6 = new THREE.WebGLRenderer();
    renderer6.setSize(400,300);

    var renderer7 = new THREE.WebGLRenderer();
    renderer7.setSize(400,300);

    document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer1.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer2.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer3.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer4.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer5.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer6.domElement);
    document.getElementsByTagName('body')[0].appendChild(renderer7.domElement);

    //设置背景色
    renderer.setClearColor(0x000000);
    renderer1.setClearColor(0xcccccc);
    renderer2.setClearColor(0x000000);
    renderer3.setClearColor(0xcccccc);
    renderer4.setClearColor(0xcccccc);
    renderer5.setClearColor(0x000000);
    renderer6.setClearColor(0xcccccc);
    renderer7.setClearColor(0x000000);

    //场景 Three.js中添加的物体都是添加到场景中去的 大容器
    var scene = new THREE.Scene();
    var scene1 = new THREE.Scene();
    var scene2 = new THREE.Scene();
    var scene3 = new THREE.Scene();
    var scene4 = new THREE.Scene();
    var scene5 = new THREE.Scene();
    var scene6 = new THREE.Scene();
    var scene7 = new THREE.Scene();

    //Camera 照相机    上 y   前 z   右x  右手坐标系
    var camera = new THREE.PerspectiveCamera(45,4/3,1,1000);//透视
    camera.position.set(0,0,5);
    scene.add(camera);

    // x 1 y 2 z3 红色长方体
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1,2,3),
        new THREE.MeshBasicMaterial({
            color:0xff0000
        })
    );
    scene.add(cube);


    //正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：
    //
    //THREE.OrthographicCamera(left, right, top, bottom, near, far)

    //设置照相机
    var camera1 = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera1.position.set(0,0,5);
    scene.add(camera1);

    var cube1 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene1.add(cube1);

    //长宽比例
    var camera2 = new THREE.OrthographicCamera(-1,1,1.5,-1.5,1,10);
    camera2.position.set(0,0,5);
    scene.add(camera2);

    var cube2 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene2.add(cube2);

    //照相机的位置 得到的效果是物体看上去向左移动了： 就好比你人往右站了，看起来物体就相对往左移动了。
    var camera3 = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera3.position.set(1,0,5);//人的位置
    scene3.add(camera3);

    var cube3 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene3.add(cube3);


    var camera4 = new THREE.OrthographicCamera(-1,3,1.5,-1.5,1,10);
    camera4.position.set(0,0,5);
    scene4.add(camera4);

    var cube4 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene4.add(cube4);

    //换个角度看世界
    var camera5 = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera5.position.set(4,-3,5);
    scene5.add(camera5);

    //指定看着圆点的地方
    camera5.lookAt(new THREE.Vector3(0,0,0));

    var cube5 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene5.add(cube5);



    //透视投影照相机（Perspective Camera）的构造函数是：
    //THREE.PerspectiveCamera(fov, aspect, near, far)
    //fov 视景体竖直方向上的张角 角度  aspect = width /height  near<far  照相机到视景体最近、最远的距离
    //注意，改变fov并不会引起画面横竖比例的变化，而改变aspect则会改变横竖比例。
    var camera6 = new THREE.PerspectiveCamera(45,400/300,1,10);
    camera6.position.set(0,0,5);
    scene6.add(camera6);

    //设置一个在原点处的边长为1的正方体

    var cube6 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene6.add(cube6);

    //虽然正方体的实际大小并未改变，但是将照相机的竖直张角设置得更大时，视景体变大了，因而正方体相对于整个视景体的大小就变小了 fov 45改为60

    var camera7 = new THREE.PerspectiveCamera(60,400/300,1,10);
    camera7.position.set(0,0,5);
    scene7.add(camera7);

    //设置一个在原点处的边长为1的正方体

    var cube7 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene7.add(cube7);


    //渲染
    renderer.render(scene,camera);
    renderer1.render(scene1,camera1);
    renderer2.render(scene2,camera2);
    renderer3.render(scene3,camera3);
    renderer4.render(scene4,camera4);
    renderer5.render(scene5,camera5);
    renderer6.render(scene6,camera6);
    renderer7.render(scene7,camera7);

}
