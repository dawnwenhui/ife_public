/**
 * Created by Administrator on 2017/3/22 0022.
 */
function init()
{
    //Three.js����CanvasԪ��
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize(400,300);


    document.getElementsByTagName('body')[0].appendChild(renderer1.domElement);

    //���ñ���ɫ
    renderer1.setClearColor(0x000000);


    //���� Three.js����ӵ����嶼����ӵ�������ȥ�� ������
    var scene1 = new THREE.Scene();

    var camera1 = new THREE.OrthographicCamera(-2,2,1.8,-1.8,5,10);
    camera1.position.set(4,-3,5);
    scene1.add(camera1);

    //ָ������Բ��ĵط�
    camera1.lookAt(new THREE.Vector3(0,0,0));

    // ������
    //THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    // width��x�����ϵĳ��ȣ�height��y�����ϵĳ��ȣ�depth��z�����ϵĳ��ȣ������������ֱ��������������ϵķֶ���
    var CubeGeometry = new THREE.Mesh(new THREE.CubeGeometry(1,2,3),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene1.add(CubeGeometry);

    //��Ⱦ
    renderer1.render(scene1,camera1);
}