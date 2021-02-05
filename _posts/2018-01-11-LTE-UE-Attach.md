--- 
layout: post
title: 手机是如何注册到网络的？(LTE)
tags: 
- 通信教程
status: publish
type: post
published: true
---
4G网络接口示意图：

![](/upload/image/4G-Net.jpeg)

总的Attach流程如下图：

![](/upload/image/ue-attach.png){:width="800px"}

图片：[UE Attach全流程](/upload/image/ue-attach.png)

第一条消息：Initial UE Message，包含如下6个项目：&nbsp;

``````
Internet Protocol Version 4, Src: 127.0.0.1, Dst: 127.0.0.20
Stream Control Transmission Protocol, Src Port: 54638 (54638), Dst Port: 36412 (36412)
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-initialUEMessage (12)
            criticality: reject (0)
            value
                InitialUEMessage
                    protocolIEs: 6 items
                        Item 0: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 1: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 1785e011b2030741020bf664f0610004010000000104f0f0...
                                    Non-Access-Stratum (NAS)PDU
                                        0001 .... = Security header type: Integrity protected (1)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0x85e011b2
                                        Sequence number: 3
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Attach request (0x41)
                                        0... .... = Type of security context flag (TSC): Native security context (for KSIasme)
                                        .000 .... = NAS key set identifier:  (0)
                                        .... 0... = Spare bit(s): 0x00
                                        .... .010 = EPS attach type: Combined EPS/IMSI attach (2)
                                        EPS mobile identity
                                        UE network capability
                                        ESM message container
                                        Tracking area identity - Last visited registered TAI
                                        DRX Parameter
                                        MS Network Capability
                                        TMSI Status
                                        Mobile station classmark 2
                                        Mobile station classmark 3
                                        Supported Codec List - Supported Codecs
                                        Voice Domain Preference and UE's Usage Setting
                                        GUTI type - Old GUTI type
                        Item 2: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: reject (0)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-RRC-Establishment-Cause
                            ProtocolIE-Field
                                id: id-RRC-Establishment-Cause (134)
                                criticality: ignore (1)
                                value
                                    RRC-Establishment-Cause: mo-Signalling (3)
                        Item 5: id-GUMMEI-ID
                            ProtocolIE-Field
                                id: id-GUMMEI-ID (75)
                                criticality: reject (0)
                                value
                                    GUMMEI
                                        pLMN-Identity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        mME-Group-ID: 0004
                                        mME-Code: 01
``````

id-eNB-UE-S1AP-ID中的ENB-UE-S1AP-ID: 420141是什么意思呢？通过36413协议[ftp://ftp.3gpp.org/Specs/archive/36_series/36.413/](ftp://ftp.3gpp.org/Specs/archive/36_series/36.413/)
我们了解到如下信息：

``````
The eNB UE S1AP ID uniquely identifies the UE association over the S1 interface within the eNB.
``````
即UE与eNB之间UE的唯一标识。

MME在收到这个消息后，会在随后第一个下行NAS消息携带本端分配给该用户的S1接口信令连接号，并同时携带eNB已经分配给该用户的eNB侧S1接口信令连接ID(上文
中的420141)，具体消息内容如下：

``````
Internet Protocol Version 4, Src: 127.0.0.20, Dst: 127.0.0.1
Stream Control Transmission Protocol, Src Port: 36412 (36412), Dst Port: 54638 (54638)
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-downlinkNASTransport (11)
            criticality: reject (0)
            value
                DownlinkNASTransport
                    protocolIEs: 3 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                
                                
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 075501
                                    Non-Access-Stratum (NAS)PDU
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Identity request (0x55)
                                        0000 .... = Spare half octet: 0
                                        .... 0001 = Identity type 2: IMSI (1)

``````

通过该消息可见：MME-UE-S1AP-ID: 1，ENB-UE-S1AP-ID: 420141，对于MME-UE-S1AP-ID的解释如下：
``````
The MME UE S1AP ID uniquely identifies the UE association over the S1 interface within the MME
``````
上面这条消息，通过item2 NAS层消息我们可以看到消息类型是Identity request，这条消息干什么用呢？

Identity Request也就是身份识别过程用于向UE请求身份用的，UE收到后会通过Identity Reponse消息上报自己的IMSI或IMEI，具体上报哪个根据

Identity Request消息中的要求来确定。上面消息我们可以看到Identity type 2: IMSI，因此要求UE上报IMSI，下面我们看看Identity Reponse消息。

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-uplinkNASTransport (13)
            criticality: ignore (1)
            value
                UplinkNASTransport
                    protocolIEs: 5 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 17095628d8040756084906610000000010
                                    Non-Access-Stratum (NAS)PDU
                                        0001 .... = Security header type: Integrity protected (1)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0x095628d8
                                        Sequence number: 4
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Identity response (0x56)
                                        Mobile identity - IMSI (460160000000001)
                                            Length: 8
                                            0100 .... = Identity Digit 1: 4
                                            .... 1... = Odd/even indication: Odd number of identity digits
                                            .... .001 = Mobile Identity Type: IMSI (1)
                                            IMSI: 460160000000001
                                                Mobile Country Code (MCC): China (460)
                                                Mobile Network Code (MNC): Unknown (160)
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: ignore (1)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
``````

很明显，在Item 2的NAS层消息携带令IMSI。当然上面的消息还有其他消息元素，我们先不分析。

接下来就进入AIR（Authentication－Information－Requset）和AIA（Authentication－Information－Answer）。

MME向HSS、Auc发送Authentication－Information－Requset（AIR），在此消息中，包含UE的IMSI， PLMN Identity等信息，HSS /Auc在接收到

AIR后，需要检查UE 的IMSI是否为已知的签约用户，然后在AIA（Authentication－Information－Answer）中将鉴权向量返回给MME。通常鉴权向量会包

含RAND， XRES， AUTN，及KASME等信息，如下为AIA中的部分信息：

``````
E-UTRAN-Vector: 000005a7c000001c000028afe472ee1a3581f3766ccdf866...
    AVP: RAND(1447) l=28 f=VM- vnd=TGPP val=e472ee1a3581f3766ccdf86606fb1a44
        AVP Code: 1447 RAND
        AVP Flags: 0xc0
        AVP Length: 28
        AVP Vendor Id: 3GPP (10415)
        RAND: e472ee1a3581f3766ccdf86606fb1a44
    AVP: XRES(1448) l=20 f=VM- vnd=TGPP val=c20dd621566818cb
        AVP Code: 1448 XRES
        AVP Flags: 0xc0
        AVP Length: 20
        AVP Vendor Id: 3GPP (10415)
        XRES: c20dd621566818cb
    AVP: AUTN(1449) l=28 f=VM- vnd=TGPP val=717491818f1d80000a7ef4ae8b213d45
        AVP Code: 1449 AUTN
        AVP Flags: 0xc0
        AVP Length: 28
        AVP Vendor Id: 3GPP (10415)
        AUTN: 717491818f1d80000a7ef4ae8b213d45
    AVP: KASME(1450) l=44 f=VM- vnd=TGPP val=263cebd2d4d1a056ca4aaee0660067476c4fe5b245eb447b...
        AVP Code: 1450 KASME
        AVP Flags: 0xc0
        AVP Length: 44
        AVP Vendor Id: 3GPP (10415)
        KASME: 263cebd2d4d1a056ca4aaee0660067476c4fe5b245eb447b...
``````
MME在接收到HSS返回的鉴权向量后， 会生成NAS层的Authentication Request Message，经过NodeB，返回给UE， 用于UE和EPS的相互鉴权。消息如下：

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-downlinkNASTransport (11)
            criticality: reject (0)
            value
                DownlinkNASTransport
                    protocolIEs: 3 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 075200e472ee1a3581f3766ccdf86606fb1a441071749181...
                                    Non-Access-Stratum (NAS)PDU
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Authentication request (0x52)
                                        0000 .... = Spare half octet: 0
                                        .... 0... = Type of security context flag (TSC): Native security context (for KSIasme)
                                        .... .000 = NAS key set identifier:  (0) ASME
                                        Authentication Parameter RAND - EPS challenge
                                            RAND value: e472ee1a3581f3766ccdf86606fb1a44
                                        Authentication Parameter AUTN (UMTS and EPS authentication challenge) - EPS challenge
                                            Length: 16
                                            AUTN value: 717491818f1d80000a7ef4ae8b213d45
``````
UE在接收到MME发送过来的NAS层的AUR消息后，启动相应的AKA鉴权过程,通过后，UE生成相应的Res返回给MME：

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-uplinkNASTransport (13)
            criticality: ignore (1)
            value
                UplinkNASTransport
                    protocolIEs: 5 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 174f138a3005075308c20dd621566818cb
                                    Non-Access-Stratum (NAS)PDU
                                        0001 .... = Security header type: Integrity protected (1)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0x4f138a30
                                        Sequence number: 5
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Authentication response (0x53)
                                        Authentication response parameter
                                            Length: 8
                                            RES: c20dd621566818cb
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: ignore (1)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
``````
MME在成功对UE进行鉴权以后，就会根据UE上报上来的安全能力（UE在AttachRequest中的DedicatedInfoNAS中指明）来选择合适的算法进行NAS层的加密

和信令完整性保护。MME会通过NAS  Security Mode Command 消息将选中的算法传送给UE，同时MME也会将接收到的UE安全能力返回给UE。UE对

NAS Security Mode Command 消息做完整性保护。

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-downlinkNASTransport (11)
            criticality: reject (0)
            value
                DownlinkNASTransport
                    protocolIEs: 3 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 37f0cd62f500075d020005f0f0c04070
                                    Non-Access-Stratum (NAS)PDU
                                        0011 .... = Security header type: Integrity protected with new EPS security context (3)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0xf0cd62f5
                                        Sequence number: 0
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Security mode command (0x5d)
                                        NAS security algorithms - Selected NAS security algorithms
                                            0... .... = Spare bit(s): 0x00
                                            .000 .... = Type of ciphering algorithm: EPS encryption algorithm EEA0 (null ciphering algorithm) (0)
                                            .... 0... = Spare bit(s): 0x00
                                            .... .010 = Type of integrity protection algorithm: EPS integrity algorithm 128-EIA2 (2)
                                        0000 .... = Spare half octet: 0
                                        .... 0... = Type of security context flag (TSC): Native security context (for KSIasme)
                                        .... .000 = NAS key set identifier:  (0) ASME
                                        UE security capability - Replayed UE security capabilities
``````
上面消息结构中的：NAS security algorithms - Selected NAS security algorithms就是算法选择的内容。

UE接收到NodeB转发过来的NAS层的 Security Mode Command消息后，首先验证其中的UE安全能力与自己早先上报给MME的一致，然后根据NAS Security ModeCommand

中选中的算法计算相应的密钥，并生成 NAS SecurityModeComplete消息，对之进行完整性保护，发送给MME。此时，可以认为NAS层的安全性已经激活， UE和NodeB可以进行安全的NAS层对话。

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-uplinkNASTransport (13)
            criticality: ignore (1)
            value
                UplinkNASTransport
                    protocolIEs: 5 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 47295b361400075e
                                    Non-Access-Stratum (NAS)PDU
                                        0100 .... = Security header type: Integrity protected and ciphered with new EPS security context (4)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0x295b3614
                                        Sequence number: 0
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Security mode complete (0x5e)
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: ignore (1)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
``````
到这里，就意味着LTE的鉴权流程完成。接下来就进入位置更新流程。

MME需要通过位置更新流程完成用户的位置更新，将MME的主机名和域名写入HSS用户动态信息中；通过位置更新响应，HSS确认用户位置的注册，并将用户的签约

信息(APN、PGW ID、QoS)返回给MME。

下面的内容便是Update Location request消息中携带的MME ID信息：mme.Lte.Test,除了携带这个，还会携带IMSI，HSS是通过IMSI来进行数据库更新的。

``````
AVP: Origin-Host(264) l=30 f=-M- val=mme.Lte.Test
    AVP Code: 264 Origin-Host
    AVP Flags: 0x40
    AVP Length: 30
    Origin-Host: mme.Lte.Test
    Padding: 0000
``````

下面是Update Location response中携带的Subscription-Data，也就是用户的签约信息。

``````
AVP: Subscription-Data(1400) l=400 f=VM- vnd=TGPP
    AVP Code: 1400 Subscription-Data
    AVP Flags: 0xc0
    AVP Length: 400
    AVP Vendor Id: 3GPP (10415)
    Subscription-Data: 000002bdc0000012000028af33638020099f000000000592...
        AVP: MSISDN(701) l=18 f=VM- vnd=TGPP val=33638020099f
            AVP Code: 701 MSISDN
            AVP Flags: 0xc0
            AVP Length: 18
            AVP Vendor Id: 3GPP (10415)
            MSISDN: 33638020099f
            E.164 number (MSISDN): 3336080290?9
            Padding: 0000
        AVP: Access-Restriction-Data(1426) l=16 f=VM- vnd=TGPP val=47
            AVP Code: 1426 Access-Restriction-Data
            AVP Flags: 0xc0
            AVP Length: 16
            AVP Vendor Id: 3GPP (10415)
            Access-Restriction-Data: 47
        AVP: Subscriber-Status(1424) l=16 f=VM- vnd=TGPP val=SERVICE_GRANTED (0)
            AVP Code: 1424 Subscriber-Status
            AVP Flags: 0xc0
            AVP Length: 16
            AVP Vendor Id: 3GPP (10415)
            Subscriber-Status: SERVICE_GRANTED (0)
        AVP: Network-Access-Mode(1417) l=16 f=VM- vnd=TGPP val=ONLY_PACKET (2)
            AVP Code: 1417 Network-Access-Mode
            AVP Flags: 0xc0
            AVP Length: 16
            AVP Vendor Id: 3GPP (10415)
            Network-Access-Mode: ONLY_PACKET (2)
        AVP: AMBR(1435) l=44 f=VM- vnd=TGPP
            AVP Code: 1435 AMBR
            AVP Flags: 0xc0
            AVP Length: 44
            AVP Vendor Id: 3GPP (10415)
            AMBR: 00000204c0000010000028af02faf08000000203c0000010...
                AVP: Max-Requested-Bandwidth-UL(516) l=16 f=VM- vnd=TGPP val=50000000
                AVP: Max-Requested-Bandwidth-DL(515) l=16 f=VM- vnd=TGPP val=100000000
        AVP: APN-Configuration-Profile(1429) l=260 f=VM- vnd=TGPP
            AVP Code: 1429 APN-Configuration-Profile
            AVP Flags: 0xc0
            AVP Length: 260
            AVP Vendor Id: 3GPP (10415)
            APN-Configuration-Profile: 0000058fc0000010000028af0000000000000594c0000010...
                AVP: Context-Identifier(1423) l=16 f=VM- vnd=TGPP val=0
                AVP: All-APN-Configurations-Included-Indicator(1428) l=16 f=VM- vnd=TGPP val=ALL_APN_CONFIGURATIONS_INCLUDED (0)
                AVP: APN-Configuration(1430) l=216 f=VM- vnd=TGPP
        AVP: Subscribed-Periodic-RAU-TAU-Timer(1619) l=16 f=V-- vnd=TGPP val=120
            AVP Code: 1619 Subscribed-Periodic-RAU-TAU-Timer
            AVP Flags: 0x80
            AVP Length: 16
            AVP Vendor Id: 3GPP (10415)
            Subscribed-Periodic-RAU-TAU-Timer: 120
``````

现在MME为在SGW上建立默认承载:GTP用户隧道，MME发送一个Create Session Request给SGW:
``````
Create Session Request
    Flags: 0x48
    Message Type: Create Session Request (32)
    Message Length: 115
    Tunnel Endpoint Identifier: 0x00000000 (0)
    Sequence Number: 0x0000a220 (41504)
    Spare: 0
    Recovery (Restart Counter) : 0
        IE Type: Recovery (Restart Counter) (3)
        IE Length: 1
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        Restart Counter: 0
    International Mobile Subscriber Identity (IMSI) : 4601600000000010
        IE Type: International Mobile Subscriber Identity (IMSI) (1)
        IE Length: 8
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        IMSI: 4601600000000010
            Mobile Country Code (MCC): China (460)
            Mobile Network Code (MNC): Unknown (160)
    RAT Type : EUTRAN (6)
        IE Type: RAT Type (82)
        IE Length: 1
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        RAT Type: EUTRAN (6)
    PDN Type : IPv4
        IE Type: PDN Type (99)
        IE Length: 1
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        0000 0... = Spare bit(s): 0
        .... .001 = PDN Type: IPv4 (1)
    Fully Qualified Tunnel Endpoint Identifier (F-TEID) : S11 MME GTP-C interface, TEID/GRE Key: 0xe0000f80, IPv4 127.0.0.21
        IE Type: Fully Qualified Tunnel Endpoint Identifier (F-TEID) (87)
        IE Length: 9
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        1... .... = V4: IPv4 address present
        .0.. .... = V6: IPv6 address not present
        ..00 1010 = Interface Type: S11 MME GTP-C interface (10)
        TEID/GRE Key: 0xe0000f80
        F-TEID IPv4: 127.0.0.21
    Fully Qualified Tunnel Endpoint Identifier (F-TEID) : S5/S8 PGW GTP-C interface, TEID/GRE Key: 0x00000000
        IE Type: Fully Qualified Tunnel Endpoint Identifier (F-TEID) (87)
        IE Length: 5
        0000 .... = CR flag: 0
        .... 0001 = Instance: 1
        0... .... = V4: IPv4 address not present
        .0.. .... = V6: IPv6 address not present
        ..00 0111 = Interface Type: S5/S8 PGW GTP-C interface (7)
        TEID/GRE Key: 0x00000000
    Access Point Name (APN) : ltebox
        IE Type: Access Point Name (APN) (71)
        IE Length: 7
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        APN (Access Point Name): ltebox
    Serving Network : MCC 460 China, MNC 16 
        IE Type: Serving Network (83)
        IE Length: 3
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        Mobile Country Code (MCC): China (460)
        Mobile Network Code (MNC): Unknown (16)
    Protocol Configuration Options (PCO) : 
        IE Type: Protocol Configuration Options (PCO) (78)
        IE Length: 1
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        [Link direction: MS to network (0)]
        1... .... = Extension: True
        .... .000 = Configuration Protocol: PPP for use with IP PDP type or IP PDN type (0)
    Bearer Context : [Grouped IE]
        IE Type: Bearer Context (93)
        IE Length: 31
        0000 .... = CR flag: 0
        .... 0000 = Instance: 0
        EPS Bearer ID (EBI) : 5
            IE Type: EPS Bearer ID (EBI) (73)
            IE Length: 1
            0000 .... = CR flag: 0
            .... 0000 = Instance: 0
            0000 .... = Spare bit(s): 0
            .... 0101 = EPS Bearer ID (EBI): 5
        Bearer Level Quality of Service (Bearer QoS) : 
            IE Type: Bearer Level Quality of Service (Bearer QoS) (80)
            IE Length: 22
            0000 .... = CR flag: 0
            .... 0000 = Instance: 0
            .... ...0 = PVI (Pre-emption Vulnerability): Enabled
            ..11 11.. = PL (Priority Level): 15
            .1.. .... = PCI (Pre-emption Capability): Disabled
            Label (QCI): 9
            Maximum Bit Rate For Uplink: 0
            Maximum Bit Rate For Downlink: 0
            Guaranteed Bit Rate For Uplink: 0
            Guaranteed Bit Rate For Downlink: 0
    [Response In: 139]
``````
SGW为该UE创建默认承载，并请求PGW为该UE创建SGW与PGW之间的承载，用来提供端到端的连通。然后PDN-GW创建一个承载并分配IP地址给该UE,SGW一接收到

PGW的响应，便立即用Create Session Response 响应MME，如下为Create Session response中PDN分配给UE的IP地址：172.16.0.2

``````
PDN Address Allocation (PAA) : 
    IE Type: PDN Address Allocation (PAA) (79)
    IE Length: 5
    0000 .... = CR flag: 0
    .... 0000 = Instance: 0
    .... .001 = PDN Type: IPv4 (1)
    PDN Address and Prefix(IPv4): 172.16.0.2
``````
现在MME必须在eNodeB与SGW之间建立一个承载。它发送S1 AP Initial Context Setup Request消息给eNodeB为该UE创建上下文，该消息中携带着承载

信息和安全信息；

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-InitialContextSetup (9)
            criticality: reject (0)
            value
                InitialContextSetupRequest
                    protocolIEs: 6 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-uEaggregateMaximumBitrate
                            ProtocolIE-Field
                                id: id-uEaggregateMaximumBitrate (66)
                                criticality: reject (0)
                                value
                                    UEAggregateMaximumBitrate
                        Item 3: id-E-RABToBeSetupListCtxtSUReq
                            ProtocolIE-Field
                                id: id-E-RABToBeSetupListCtxtSUReq (24)
                                criticality: reject (0)
                                value
                                    E-RABToBeSetupListCtxtSUReq: 1 item
                                        Item 0: id-E-RABToBeSetupItemCtxtSUReq
                                            ProtocolIE-SingleContainer
                                                id: id-E-RABToBeSetupItemCtxtSUReq (52)
                                                criticality: reject (0)
                                                value
                                                    E-RABToBeSetupItemCtxtSUReq
                                                        e-RAB-ID: 5
                                                        e-RABlevelQoSParameters
                                                        0... .... Extension Present Bit: False
                                                        transportLayerAddress: 7f000028 [bit length 32, 0111 1111  0000 0000  0000 0000  0010 1000 decimal value 2130706472]
                                                        gTP-TEID: 00000001
                                                        nAS-PDU: 279c949db60107420249062064f0610001001c5201c10109...
                                                        Non-Access-Stratum (NAS)PDU
                                                            0010 .... = Security header type: Integrity protected and ciphered (2)
                                                            .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                                            Message authentication code: 0x9c949db6
                                                            Sequence number: 1
                                                            0000 .... = Security header type: Plain NAS message, not security protected (0)
                                                            .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                                            NAS EPS Mobility Management Message Type: Attach accept (0x42)
                                                            0000 .... = Spare half octet: 0
                                                            .... 0... = Spare bit(s): 0x00
                                                            .... .010 = Attach result: Combined EPS/IMSI attach (2)
                                                            GPRS Timer - T3412 value
                                                            Tracking area identity list - TAI list
                                                            ESM message container
                                                                Length: 28
                                                                ESM message container contents: 5201c1010907066c7465626f780501ac1000025e04fefede...
                                                                    0101 .... = EPS bearer identity: EPS bearer identity value 5 (5)
                                                                    .... 0010 = Protocol discriminator: EPS session management messages (0x2)
                                                                    Procedure transaction identity: 1
                                                                    NAS EPS session management messages: Activate default EPS bearer context request (0xc1)
                                                                    EPS quality of service
                                                                    Access Point Name
                                                                    PDN address
                                                                    APN aggregate maximum bit rate
                                                                    Protocol Configuration Options
                                                            EPS mobile identity - GUTI
                        Item 4: id-UESecurityCapabilities
                            ProtocolIE-Field
                                id: id-UESecurityCapabilities (107)
                                criticality: reject (0)
                                value
                                    UESecurityCapabilities
                                        ..0. .... Extension Present Bit: False
                                        encryptionAlgorithms: e000 [bit length 16, 1110 0000  0000 0000 decimal value 57344]
                                        ...0 .... Extension Present Bit: False
                                        integrityProtectionAlgorithms: e000 [bit length 16, 1110 0000  0000 0000 decimal value 57344]
                        Item 5: id-SecurityKey
                            ProtocolIE-Field
                                id: id-SecurityKey (73)
                                criticality: reject (0)
                                value
                                    SecurityKey: a14157a870e6f760c90aa1c582d6b6f81b34c2db7c1c6388... [bit length 256]
``````
MME发送Activate Default EPS Bearer Context Request消息以激活默认承载内容。这一EMS消息包含UE IP地址:

``````
ESM message container
    Length: 28
    ESM message container contents: 5201c1010907066c7465626f780501ac1000025e04fefede...
        0101 .... = EPS bearer identity: EPS bearer identity value 5 (5)
        .... 0010 = Protocol discriminator: EPS session management messages (0x2)
        Procedure transaction identity: 1
        NAS EPS session management messages: Activate default EPS bearer context request (0xc1)
        EPS quality of service
            Length: 1
            Quality of Service Class Identifier (QCI): QCI 9 (9)
        Access Point Name
            Length: 7
            APN: ltebox
        PDN address
            Length: 5
            0000 0... = Spare bit(s): 0x00
            PDN type: IPv4 (1)
            PDN IPv4: 172.16.0.2
        APN aggregate maximum bit rate
            Element ID: 0x5e
            Length: 4
            APN-AMBR for downlink: 8640 kbps
            APN-AMBR for uplink: 8640 kbps
            APN-AMBR for downlink (extended): 200 Mbps
            Total APN-AMBR for downlink: 200.000 Mbps
            APN-AMBR for uplink (extended): 100 Mbps
            Total APN-AMBR for uplink: 100.000 Mbps
        Protocol Configuration Options
            Element ID: 0x27
            Length: 1
            [Link direction: Network to MS (1)]
            1... .... = Extension: True
            .... .000 = Configuration Protocol: PPP for use with IP PDP type or IP PDN type (0)
``````

UE获得动态IP地址,默认承载在UE和P-GW间建立。

``````
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-uplinkNASTransport (13)
            criticality: ignore (1)
            value
                UplinkNASTransport
                    protocolIEs: 5 items
                        Item 0: id-MME-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-MME-UE-S1AP-ID (0)
                                criticality: reject (0)
                                value
                                    MME-UE-S1AP-ID: 1
                        Item 1: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 2: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 27d0a87fd401074300035200c2
                                    Non-Access-Stratum (NAS)PDU
                                        0010 .... = Security header type: Integrity protected and ciphered (2)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0xd0a87fd4
                                        Sequence number: 1
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Attach complete (0x43)
                                        ESM message container
                                            Length: 3
                                            ESM message container contents: 5200c2
                                                0101 .... = EPS bearer identity: EPS bearer identity value 5 (5)
                                                .... 0010 = Protocol discriminator: EPS session management messages (0x2)
                                                Procedure transaction identity: 0
                                                NAS EPS session management messages: Activate default EPS bearer context accept (0xc2)
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: ignore (1)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
``````

到这里整个attach流程也就完成了，UE现在可以连接PDN（internet），可以通过自己的动态IP地址使用internet服务。