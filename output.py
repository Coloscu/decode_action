#2025-01-24 06:35:38
�                   �  � d dl Z d dlZd dlZd dlZd� Zdej        v r5 ej        dej        d         �  �        Z ed e	e�  �        � d��  �         ng Z ed�  �         d� Z
d	� Zd
� Zd� Zd� Zedk    rL	  e�   �           ed�  �          e�   �          dS # e$ r"Z ed ee�  �        z   �  �         Y dZ[dS dZ[ww xY wdS )�    Nc                  �(   � d} t          | �  �         d S )NuK  
    ╔══════════════════════════════════════════════╗
    ║                                              ║
    ║   ██████  ██████  ███    ███                ║
    ║   ██   ██ ██   ██ ████  ████                ║
    ║   ██   ██ ██   ██ ██ ████ ██                ║
    ║   ██   ██ ██   ██ ██  ██  ██                ║
    ║   ██████  ██████  ██      ██                ║
    ║                                              ║
    ║          霸王茶姬自动签到程序                ║
    ║     Created by 大大鸣 - V1.0.0              ║
    ║     联系方式: v:xolag29638099              ║
    ║                                              ║
    ╚══════════════════════════════════════════════╝
    )�print)�banners    �<string>�print_bannerr      s   � ��F� 
�&�M�M�M�M�M�    �yymbwcj�#u   大大鸣发现您有u	   个账号u3   大大鸣发现您没有配置环境变量->yymbwcjc                 �  � d}ddi}d| ddddd	d
�}t          j        |||��  �        �                    �   �         }|d         dk    r$|d         dk    rt          d|d         �  �         d S t          d|d         �  �         d S )NzChttps://webapi2.qmai.cn/web/cmk-center/common/getCrmAvailablePoints�appid�wxafec6f8422cb357b�webapi2.qmai.cn�49006��Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11581�application/json�wechat�catering��HostzQm-User-Tokenzstore-idz
User-AgentzContent-TypezQm-FromzQm-From-Type)�params�headers�coder   �message�oku!   签到成功，当前总积分为�datau   请求失败：)�requests�get�jsonr   )�token�urlr   r   �responses        r   �runr"   !   s�   � �
O�C��%��F� "��� J�*��"�� �G� �|�C���@�@�@�E�E�G�G�H����1�� 6��)�!4�d�!:� 6��1�(�6�2B�C�C�C�C�C����)�!4�5�5�5�5�5r   c                 �B  � d}d| dddddd�}t          t          j        �   �         �  �        }d	d
dd|ddd�}t          j        |||��  �        �                    �   �         }|d         dk    r|d         dk    rt          d�  �         d S t          d|d         �  �         d S )Nz:https://webapi2.qmai.cn/web/cmk-center/sign/takePartInSignr   r   r   r   r   r   r   �1080523113114726401z�1gl6k38c1Fdpie3cbM568SxOybWyMqIIrjEOAu1tnziMe9c4ZFWlK+hvBQbi7xVGJzL/IsxTxImZl9uC55ywKuJ4yZoMx6D9NPMg7mDnvFydGHmXbew3zUB5ljjgK3MOixj1bdAfIQe2MVCLTaxTDDf98kU2yhAnStcGSn2DvQGU98gmO42OtpCFlyORvfpnpYQ6PJRkSElncLdIWX84ag==� 78D8514357B173972D96CF6255055C4E�   r   )�
activityIdr   �	signature�storeId�	timestamp�versionr   �r   r   r   r   r   r   u   执行签名成功u   执行签名失败：)�int�timer   �postr   r   )r   r    r   r*   �payloadr!   s         r   �sign0r1   4   s�   � �
F�C�!��� J�*��"�� �G� �D�I�K�K� � �I�,� k�7����&�� �G� �}�S�w��@�@�@�E�E�G�G�H����1�� <��)�!4��!<� <��"�#�#�#�#�#��%�x�	�':�;�;�;�;�;r   c                 ��   � d}d| dddddd�}d	d
d�}t          j        |||��  �        �                    �   �         }|d         dk    r|d         dk    rt          d�  �         d S t          d|d         �  �         d S )Nz>https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatisticsr   r   r   r   r   r   r   r$   r   )r'   r   r,   r   r   r   r   u   用户签名统计成功u   用户签名统计：�r   r/   r   r   �r   r    r   r0   r!   s        r   �sign1r5   P   s�   � �
J�C�!��� J�*��"�� �G� -�%�� �G�
 �}�S�w��@�@�@�E�E�G�G�H����1�� <��)�!4��!<� <��(�)�)�)�)�)��%�x�	�':�;�;�;�;�;r   c                 ��   � d}d| dddddd�}d	d
ddd�}t          j        |||��  �        �                    �   �         }|d         dk    r|d         dk    rt          d�  �         d S t          d|d         �  �         d S )NzBhttps://webapi2.qmai.cn/web/cmk-center/sign/userSignRecordCalendarr   r   r   r   r   r   r   r$   z
2024-07-01z
2025-02-28r   )r'   �	startDate�endDater   r,   r   r   r   r   uv   签到请求成功gonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggonggongu   签到失败：r3   r4   s        r   �sign2r9   f   s�   � �
N�C�!��� J�*��"�� �G� -�"� �&�	� �G� �}�S�w��@�@�@�E�E�G�G�H����1�� 6��)�!4��!<� 6��  G�  	H�  	H�  	H�  	H�  	H����)�!4�5�5�5�5�5r   c                  �4  � d} t           D ]�}	 t          d| � d��  �         t          |�  �         t          |�  �         t	          |�  �         t          |�  �         | dz  } �X# t          $ r)}t          dt          |�  �        z   �  �         Y d }~��d }~ww xY wd S )N�   u   大大鸣发现您的第u   个账号正在登录�3   大大鸣觉得你在瞎搞，请看报错日志：)�bwcjr   r1   r5   r9   r"   �	Exception�str)�zr   �es      r   �mainrB   ~   s�   � �	�A�� 	R� 	R��	R��E�Q�E�E�E�F�F�F��%�L�L�L��%�L�L�L��%�L�L�L���J�J�J���F�A�A��� 	R� 	R� 	R��G�#�a�&�&�P�Q�Q�Q�Q�Q�Q�Q�Q�����	R����	R� 	Rs   �AA"�"
B�,B�B�__main__z3
==================================================r<   )r   �os�rer.   r   �environ�splitr=   r   �lenr"   r1   r5   r9   rB   �__name__r>   rA   r?   � r   r   �<module>rK      s�  �� ���� 	�	�	�	� 	�	�	�	� ����� � �$ ��
�� A��2�8�C���I�.�/�/�D�	�E�
6�#�#�d�)�)�
6�
6�
6�7�7�7�7��D�	�E�
?�@�@�@�6� 6� 6�&<� <� <�8<� <� <�,6� 6� 6�0R� R� R� �z�� N�N��������o������������� N� N� N���C�c�c�!�f�f�L�M�M�M�M�M�M�M�M�M�����N����N� Ns   �5B �B=�B8�8B=