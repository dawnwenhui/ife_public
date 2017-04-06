/**
 * Created by Administrator on 2017/3/16 0016.
 */
function init() {

    //Renderer ��Ⱦ����CanvasԪ�ذ�
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("mainCanvas")
    });

    //Three.js����CanvasԪ��
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

    //���ñ���ɫ
    renderer.setClearColor(0x000000);
    renderer1.setClearColor(0xcccccc);
    renderer2.setClearColor(0x000000);
    renderer3.setClearColor(0xcccccc);
    renderer4.setClearColor(0xcccccc);
    renderer5.setClearColor(0x000000);
    renderer6.setClearColor(0xcccccc);
    renderer7.setClearColor(0x000000);

    //���� Three.js����ӵ����嶼����ӵ�������ȥ�� ������
    var scene = new THREE.Scene();
    var scene1 = new THREE.Scene();
    var scene2 = new THREE.Scene();
    var scene3 = new THREE.Scene();
    var scene4 = new THREE.Scene();
    var scene5 = new THREE.Scene();
    var scene6 = new THREE.Scene();
    var scene7 = new THREE.Scene();

    //Camera �����    �� y   ǰ z   ��x  ��������ϵ
    var camera = new THREE.PerspectiveCamera(45,4/3,1,1000);//͸��
    camera.position.set(0,0,5);
    scene.add(camera);

    // x 1 y 2 z3 ��ɫ������
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1,2,3),
        new THREE.MeshBasicMaterial({
            color:0xff0000
        })
    );
    scene.add(cube);


    //����ͶӰ�������Orthographic Camera������������Ϊֱ�ۣ����Ĺ��캯���ǣ�
    //
    //THREE.OrthographicCamera(left, right, top, bottom, near, far)

    //���������
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

    //�������
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

    //�������λ�� �õ���Ч�������忴��ȥ�����ƶ��ˣ� �ͺñ���������վ�ˣ��������������������ƶ��ˡ�
    var camera3 = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera3.position.set(1,0,5);//�˵�λ��
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

    //�����Ƕȿ�����
    var camera5 = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera5.position.set(4,-3,5);
    scene5.add(camera5);

    //ָ������Բ��ĵط�
    camera5.lookAt(new THREE.Vector3(0,0,0));

    var cube5 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene5.add(cube5);



    //͸��ͶӰ�������Perspective Camera���Ĺ��캯���ǣ�
    //THREE.PerspectiveCamera(fov, aspect, near, far)
    //fov �Ӿ�����ֱ�����ϵ��Ž� �Ƕ�  aspect = width /height  near<far  ��������Ӿ����������Զ�ľ���
    //ע�⣬�ı�fov��������������������ı仯�����ı�aspect���ı����������
    var camera6 = new THREE.PerspectiveCamera(45,400/300,1,10);
    camera6.position.set(0,0,5);
    scene6.add(camera6);

    //����һ����ԭ�㴦�ı߳�Ϊ1��������

    var cube6 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene6.add(cube6);

    //��Ȼ�������ʵ�ʴ�С��δ�ı䣬���ǽ����������ֱ�Ž����õø���ʱ���Ӿ������ˣ��������������������Ӿ���Ĵ�С�ͱ�С�� fov 45��Ϊ60

    var camera7 = new THREE.PerspectiveCamera(60,400/300,1,10);
    camera7.position.set(0,0,5);
    scene7.add(camera7);

    //����һ����ԭ�㴦�ı߳�Ϊ1��������

    var cube7 = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene7.add(cube7);


    //��Ⱦ
    renderer.render(scene,camera);
    renderer1.render(scene1,camera1);
    renderer2.render(scene2,camera2);
    renderer3.render(scene3,camera3);
    renderer4.render(scene4,camera4);
    renderer5.render(scene5,camera5);
    renderer6.render(scene6,camera6);
    renderer7.render(scene7,camera7);

}
