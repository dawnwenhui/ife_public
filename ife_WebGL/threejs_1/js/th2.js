/**
 * Created by Administrator on 2017/3/17 0017.
 */
function init()
{
    //����ͶӰ�������Orthographic Camera������������Ϊֱ�ۣ����Ĺ��캯���ǣ�
    //
    //THREE.OrthographicCamera(left, right, top, bottom, near, far)

    //���������
    var camera = new THREE.OrthographicCamara(-2,2,1.5,-1.5,1,10);
    camera.position.set(0,0,5);
    scene.add(camera);

    var cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe:true
        })
    );
    scene.add(cube);
}

